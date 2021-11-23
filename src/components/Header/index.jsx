import React from "react";
import Box from "../Box";
import Logo from "../Logo";
import User from "../User";

const Header = () => {
  return (
    <header className={"w-full flex justify-between mb-4"}>
      <Box className={"h-14 ml-0"}>
        <Logo />
      </Box>
      <Box className={"mr-0"}>
        <User>Georgii Klimov</User>
      </Box>
    </header>
  );
};

export default Header;
