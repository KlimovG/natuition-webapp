import "./App.css";
import React from "react";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import Container from "./components/Container";
import Row from "./components/Row";
import Box from "./components/Box";
import Logo from "./components/Logo";

const App = () => {
  return (
    <div className="app lg:h-screen flex items-center justify-center">
      <Container styles="flex flex-col justify-center items-center">
        <Box styles={"flex w-64 mb-6"}>
          <Logo />
        </Box>
        <Row styles={"mx-auto flex-col gap-4"}>
          <ButtonPrimary>Sign in</ButtonPrimary>
          <ButtonSecondary>Sign up</ButtonSecondary>
        </Row>
      </Container>
    </div>
  );
};

export default App;
