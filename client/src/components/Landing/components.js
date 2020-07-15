import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

export const MainWrapper = styled.div`
  background: ${(props) => props.theme.black};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 700px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 45em) {
    flex-direction: column;
    align-items: center;
    height: 30vh;
    justify-content: space-between;
  }
`;

export const StyledButton = styled(Button)`
  @media (max-width: 45em) {
    width: 8em;
    font-size: 35px;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
