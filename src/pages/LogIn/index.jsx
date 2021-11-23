import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Box from "../../components/Box";
import Logo from "../../components/Logo";
import { useHistory } from "react-router-dom";
import InputText from "../../components/InputText";

const Login = ({ children, className }) => {
  const history = useHistory();
  //function to bring users to login or registration pages
  const toPage = (e) => {
    const value = e.target.innerText.toLowerCase();
    switch (value) {
      case "sign in":
        history.push("./main");
        break;
      case "decline":
        history.push("/");
        break;
      default:
        return;
    }
  };
  return (
    <Container className="flex h-full flex-col justify-center items-center">
      <Box className={"flex w-64 mb-8"}>
        <Logo />
      </Box>
      <Row className={"flex-col gap-4 mb-8"}>
        <InputText>Email</InputText>
        <InputText>Password</InputText>
      </Row>
      <Row className={"mx-auto flex-col gap-4"}>
        <ButtonPrimary handleClick={toPage}>Sign in</ButtonPrimary>
        <ButtonSecondary handleClick={toPage}>Decline</ButtonSecondary>
      </Row>
    </Container>
  );
};

export default Login;
