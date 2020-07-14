import styled from "styled-components";
import { FormInput, Label } from "../Login/components";
import Button from "../shared/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  min-height: 700px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 95%;
  max-width: 30em;
  height: 37em;
`;

export const StyledButton = styled(Button)`
  @media (max-width: 45em) {
    margin-top: 10px;
    font-size: 30px;
    width: 12.1em;
  }
`;

export const LongInput = styled(FormInput)`
  width: 19.5em;
  @media (max-width: 45em) {
    width: 16em;
  }
`;

export const RFormInput = styled(FormInput)`
  width: 8em;
  @media (max-width: 45em) {
    width: 6.7em;
  }
`;

export const RLabel = styled(Label)`
  font-size: 18px;
  margin-right: 4.5em;
  margin-bottom: -1em;
  @media (max-width: 45em) {
    margin-right: 3em;
    margin-bottom: -0.4em;
  }
`;
export const LongLabel = styled(RLabel)`
  margin-right: 17.2em;
  font-size: 18px;
  @media (max-width: 45em) {
    margin-right: 14em;
  }
`;

export const ConfirmPassLabel = styled(LongLabel)`
  margin-right: 12.7em;
  @media (max-width: 45em) {
    margin-right: 9.5em;
  }
`;

export const ErrorSpan = styled.span`
  color: ${(props) => props.theme.flame};
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 600;
  @media (max-width: 45em) {
    font-size: 12px;
  }
`;

export const LongErrorSpan = styled(ErrorSpan)`
  margin-left: 16em;
`;

export const PassErrorSpan = styled(LongErrorSpan)`
  margin-left: 10em;
`;
export const PassErrorSpan2 = styled(LongErrorSpan)`
  margin-left: 12em;
`;
