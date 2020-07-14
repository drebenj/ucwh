import styled from "styled-components";
import Button from "../shared/Button";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 700px;
  @media (max-width: 45em) {
    justify-content: space-evenly;
  }
`;

export const FormInput = styled.input`
  padding: 0.7em;
  width: 15em;
  font-size: 20px;
  font-weight: 800;
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.saphire};
  border-radius: 15px;
  border: 3px solid ${(props) => props.theme.maize};
  @media (max-width: 45em) {
    padding: 0.8em;
    border-width: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 30em;
`;

export const StyledButton = styled(Button)`
  @media (max-width: 45em) {
    font-size: 35px;
    width: 10em;
  }
`;

export const ErrorSpan = styled.span`
  color: ${(props) => props.theme.flame};
  font-family: Roboto, sans-serif;
  font-weight: 600;
  margin-bottom: 2em;
  margin-left: 8em;
  @media (max-width: 45em) {
    margin-top: 1em;
  }
`;

export const Label = styled.span`
  color: ${(props) => props.theme.saphire};
  font-family: Poppins, sans-serif;
  font-size: 22px;
  font-weight: 600;
  margin-right: 9em;
  margin-bottom: -0.5em;
  @media (max-width: 45em) {
    margin-right: 10em;
    margin-bottom: 0;
  }
`;
