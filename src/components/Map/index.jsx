import React, { useRef, useState, useEffect, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import Box from "../Box";
import Column from "../Column";
import ButtonMapType from "../ButtonMapType";
import MapActions from "../MapActions"; // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken = process.env.MAPBOX_API;
mapboxgl.accessToken =
  "pk.eyJ1IjoienRyYW5leiIsImEiOiJja3dtanE4ZWoxdDlxMnBwa3dmNjMyemhwIn0.zYkQpYBO9jo_F9g-OQyDPQ";
const Map = ({ className, children, mapData }) => {
  const mapContainer = useRef(null);
  const fullScreenButton = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(4.945346378076248);
  const [lng, setLng] = useState(52.34691296);
  const [zoom, setZoom] = useState(18);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [gpsField, setGPSField] = useState([]);
  const [gpsExtractions, setGPSExtractions] = useState([]);
  const [gpsPath, setGPSPath] = useState([]);
  const [currentMarkers, setCurrentMarkers] = useState([]);
  //Map type
  // state to define type of the map
  const [mapType, setMapType] = useState("");
  // function to toggle a map type
  const toggleMap = (e) => {
    const name = e.currentTarget.name;
    setMapType(name);
  };
  // const toggleFullScreen = () => {
  //   if (!isFullScreen) {
  //     mapContainer.current.requestFullscreen();
  //   } else {
  //     document.exitFullscreen();
  //   }
  //   setIsFullScreen((prev) => (prev = !prev));
  // };
  // const listenerFullscreen = (e) => {
  //   if (e.keyCode === 27) {
  //     if (isFullScreen) {
  //       setIsFullScreen((prev) => (prev = !prev));
  //     }
  //   }
  // };
  // const escFunction = useCallback((event) => {
  //   if (event.keyCode === 27) {
  //     console.log("esc pressed");
  //     setIsFullScreen(false);
  //   }
  // }, []);
  useEffect(() => {
    // document.addEventListener("keydown", escFunction);
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [lat, lng],
      zoom: zoom,
    });
    map.current.addControl(
      new mapboxgl.FullscreenControl({ container: fullScreenButton })
    );
    // return () => {
    //   document.removeEventListener("keydown", escFunction);
    // };
  }, []);
  useEffect(() => {}, [document.fullscreenElement]);
  useEffect(() => {
    if (mapData) {
      removeAllMarkers(currentMarkers);
      removeRoute();
      removeField();
      const { field, gps_extractions, gps_path } = mapData;
      const calculateCenterOfArea = new mapboxgl.LngLatBounds(
        field[0],
        field[2]
      );
      const centerOfArea = calculateCenterOfArea.getCenter(); // = LngLat {lng: -73.96365, lat: 40.78315}
      setLng((prev) => (prev = centerOfArea["lat"]));
      setLat((prev) => (prev = centerOfArea["lng"]));
      setGPSField((prev) => (prev = [...field, field[0]]));
      setGPSExtractions((prev) => {
        const result = [];
        gps_extractions.forEach((item) => {
          result.push({ lng: item[0], lat: item[1] });
        });
        return (prev = result);
      });
      setGPSPath((prev) => (prev = gps_path));
      map.current.flyTo({
        center: [lat, lng],
        zoom: 18,
      });
    }
  }, [mapData, lat, lng]);

  // Function to deal with polygon, route and markers of mapboxgl
  //Adding functions
  const addField = () => {
    if (!map.current.getSource("field")) {
      map.current.addSource("field", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            // These coordinates outline Maine.
            coordinates: [gpsField],
          },
        },
      });
      // Add a new layer to visualize the polygon.
      map.current.addLayer({
        id: "field",
        type: "fill",
        source: "field", // reference the data source
        layout: {},
        paint: {
          "fill-color": "#0080ff", // blue color fill
          "fill-opacity": 0.3,
        },
      });
      // Add a black outline around the polygon.
      map.current.addLayer({
        id: "outline",
        type: "line",
        source: "field",
        layout: {},
        paint: {
          "line-color": "#000",
          "line-width": 3,
        },
      });
    }
  };

  const addRoute = () => {
    if (!map.current.getSource("route")) {
      map.current.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: gpsPath,
          },
        },
      });
      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#F3A712",
          "line-width": 7,
          "line-opacity": 1,
        },
      });
    }
  };
  const addMarkers = (markers) => {
    for (let item in markers) {
      const marker = new mapboxgl.Marker({
        color: "#F37E12",
        scale: 0.5,
      })
        .setLngLat(gpsExtractions[item])
        .addTo(map.current);
      setCurrentMarkers((prevState) => [...prevState, marker]);
    }
  };
  //Removing functions
  const removeAllMarkers = () => {
    if (currentMarkers.length > 0) {
      currentMarkers.forEach((item) => item.remove());
      setCurrentMarkers([]);
    }
  };
  const removeRoute = () => {
    if (map.current.getSource("route")) {
      map.current.removeLayer("route");
      map.current.removeSource("route");
    }
  };
  const removeField = () => {
    if (map.current.getSource("field")) {
      map.current.removeLayer("outline");
      map.current.removeLayer("field");
      map.current.removeSource("field");
    }
  };
  useEffect(() => {
    if (map.current.loaded()) {
      if (mapType === "field") {
        removeAllMarkers();
        removeRoute();
        addField();
      } else if (mapType === "gps") {
        removeAllMarkers();
        removeField();
        addRoute();
      } else if (mapType === "point") {
        removeRoute();
        removeField();
        addMarkers(gpsExtractions);
      }
    }
  }, [mapData, mapType]);

  useEffect(() => {}, [mapType]);

  return (
    <Box className={"" + className}>
      <div ref={mapContainer} className="map-container h-full">
        {" "}
        <MapActions
          // toggleFullScreen={toggleFullScreen}
          isFullScreen={isFullScreen}
          fullScreenButton={fullScreenButton}
        />
      </div>
      <Column className={"space-y-4 absolute top-4 left-4"}>
        <ButtonMapType type={mapType} handleClick={toggleMap} value={"gps"}>
          <svg className={"w-6 h-6"} fill="none" viewBox="0 0 24 24">
            <path
              className={"stroke-current"}
              d="M22 8.5H19.75C19.2859 8.5 18.8408 8.68437 18.5126 9.01256C18.1844 9.34075 18 9.78587 18 10.25V10.25C18 11.216 18.784 12 19.75 12H21.25C22.216 12 23 12.784 23 13.75C23 14.2141 22.8156 14.6592 22.4874 14.9874C22.1592 15.3156 21.7141 15.5 21.25 15.5H18"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={"stroke-current"}
              d="M10.5 15.5V12.7V15.5ZM10.5 12.7H13.357C14.071 12.7 15.5 12.7 15.5 10.6C15.5 8.5 14.071 8.5 13.357 8.5H10.5V12.7Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={"stroke-current"}
              d="M6.49994 9.127C6.04907 8.81329 5.53069 8.61011 4.98674 8.53387C4.44278 8.45764 3.88852 8.5105 3.36878 8.68818C2.84904 8.86586 2.37842 9.16338 1.99497 9.55666C1.61153 9.94994 1.32602 10.4279 1.16156 10.952C0.997092 11.4761 0.958279 12.0315 1.04826 12.5734C1.13824 13.1152 1.35448 13.6283 1.6795 14.0711C2.00453 14.5138 2.4292 14.8739 2.91917 15.1222C3.40915 15.3704 3.95067 15.4998 4.49994 15.5C6.43294 15.5 7.99994 14 7.99994 12H4.99994"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonMapType>
        <ButtonMapType type={mapType} handleClick={toggleMap} value={"field"}>
          <svg className={"w-6 h-6 fill-current"} viewBox="0 0 24 24">
            <g clipPath="url(#clip0_1_216)">
              <path d="M3.012 3.60001C1.35888 3.60001 0 4.95865 0 6.61201C0 8.05609 1.03608 9.27505 2.4 9.56065V14.4634C1.03608 14.749 0 15.9682 0 17.4122C0 19.0656 1.35864 20.424 3.012 20.424C4.46328 20.424 5.6736 19.3742 5.94984 18H18.059C18.3355 19.3757 19.5598 20.424 21.0122 20.424C22.6082 20.424 23.9174 19.1549 24.007 17.5795C24.0181 17.5245 24.0238 17.4684 24.0238 17.4122C24.0238 17.3561 24.0181 17.3 24.007 17.245C23.9287 15.8681 22.9188 14.7254 21.6 14.459V9.56497C22.9188 9.29857 23.9287 8.15617 24.0072 6.77953C24.0184 6.72447 24.024 6.66843 24.024 6.61225C24.024 6.55607 24.0184 6.50002 24.0072 6.44497C23.9172 4.86961 22.6082 3.60001 21.012 3.60001C19.5682 3.60001 18.349 4.63609 18.0634 6.00001H5.9448C5.6592 4.63777 4.45464 3.60001 3.012 3.60001V3.60001ZM3.012 5.28001C3.75768 5.28001 4.344 5.86657 4.344 6.61201C4.344 7.35769 3.75768 7.94401 3.012 7.94401C2.2668 7.94401 1.68 7.35769 1.68 6.61201C1.68 5.86681 2.26656 5.28001 3.012 5.28001ZM21.012 5.28001C21.7577 5.28001 22.344 5.86657 22.344 6.61201C22.344 7.35769 21.7577 7.94401 21.012 7.94401C20.2666 7.94401 19.68 7.35769 19.68 6.61201C19.68 5.86657 20.2666 5.28001 21.012 5.28001ZM5.81232 7.68001H18.2011C18.3524 8.07206 18.5832 8.42854 18.879 8.72698C19.1748 9.02541 19.5293 9.25934 19.92 9.41401V14.61C19.5333 14.7631 19.182 14.9938 18.8879 15.2879C18.5938 15.582 18.3631 15.9333 18.21 16.32H5.802C5.64915 15.9302 5.41724 15.5762 5.12088 15.2804C4.82451 14.9845 4.47012 14.7533 4.08 14.6011V9.42289C4.47432 9.26928 4.83213 9.03486 5.13043 8.7347C5.42874 8.43454 5.66093 8.07527 5.81208 7.68001H5.81232ZM3.012 16.08C3.75744 16.08 4.34376 16.6666 4.34376 17.412C4.34376 18.1577 3.75744 18.744 3.01176 18.744C2.2668 18.744 1.68 18.1577 1.68 17.412C1.68 16.6668 2.26656 16.08 3.012 16.08ZM21.012 16.08C21.7574 16.08 22.3438 16.6666 22.3438 17.412C22.3438 18.1577 21.7574 18.744 21.0118 18.744C20.2663 18.744 19.6798 18.1577 19.6798 17.412C19.6798 16.6666 20.2663 16.08 21.0118 16.08H21.012Z" />
            </g>
            <defs>
              <clipPath id="clip0_1_216">
                <rect width="24" height="24" />
              </clipPath>
            </defs>
          </svg>
        </ButtonMapType>
        <ButtonMapType type={mapType} handleClick={toggleMap} value={"point"}>
          <svg className={"w-5 h-5 fill-current"} viewBox="0 0 24 24">
            <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.7135 8.97212 19.8042 7.08154 18.3613 5.63869C16.9185 4.19585 15.0279 3.28651 13 3.06V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V3.06C8.97212 3.28651 7.08154 4.19585 5.63869 5.63869C4.19585 7.08154 3.28651 8.97212 3.06 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3.06C3.28651 15.0279 4.19585 16.9185 5.63869 18.3613C7.08154 19.8042 8.97212 20.7135 11 20.94V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20.94C15.0279 20.7135 16.9185 19.8042 18.3613 18.3613C19.8042 16.9185 20.7135 15.0279 20.94 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20.94V11ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" />
          </svg>
        </ButtonMapType>
      </Column>
    </Box>
  );
};

export default Map;
