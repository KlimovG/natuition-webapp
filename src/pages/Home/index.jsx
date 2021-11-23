import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Box from "../../components/Box";
import Logo from "../../components/Logo";
import { useHistory } from "react-router-dom";

const Home = ({ children, styles }) => {
  const history = useHistory();
  //function to bring users to login or registration pages
  const toPage = (e) => {
    const value = e.target.innerText.toLowerCase();
    switch (value) {
      case "sign in":
        history.push("./login");
        break;
      case "sign up":
        history.push("./registration");
        break;
      default:
        return;
    }
  };
  return (
    <Container styles="flex flex-col justify-center items-center">
      <Box styles={"flex w-64 mb-6"}>
        <Logo />
      </Box>
      <Row styles={"mx-auto flex-col gap-4"}>
        <ButtonPrimary handleClick={toPage}>Sign in</ButtonPrimary>
        <ButtonSecondary handleClick={toPage}>Sign up</ButtonSecondary>
      </Row>
    </Container>
  );
};

export default Home;
