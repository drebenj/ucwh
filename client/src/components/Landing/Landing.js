import React from "react";
import Header from "../shared/Header";
import * as Styled from "./components";

export default function Landing() {
  return (
    <Styled.MainWrapper>
      <Header> Welcome to UC Woodland Hills! </Header>
      <Styled.BtnWrapper>
        <Styled.StyledLink to="/login">
          <Styled.StyledButton>Login</Styled.StyledButton>
        </Styled.StyledLink>
        <Styled.StyledLink to="/register">
          <Styled.StyledButton>Register</Styled.StyledButton>
        </Styled.StyledLink>
      </Styled.BtnWrapper>
    </Styled.MainWrapper>
  );
}
