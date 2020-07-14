import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextArea = styled.textarea`
  outline: none;
  resize: none;
  border: 5px solid ${(props) => props.theme.maize};
  border-radius: 20px;
  background: transparent;
  color: ${(props) => props.theme.maize};
  width: 40em;
  padding: 1em;
  height: 13em;
  font-family: Poppins, sans-serif;
  @media (max-width: 50em) {
    width: 80%;
    height: 20em;
  }
`;

export const Label = styled.label`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 0.5em;
  max-width: 40em;
  color: ${(props) => props.theme.saphire};
  @media (max-width: 50em) {
    font-size: 18px;
  }
`;

export const Error = styled.p`
  color: ${(props) => props.theme.flame};
  justify-self: right;
`;
