import styled from "styled-components";

const Button = styled.button`
  font-size: 35px;
  width: 6.3em;
  height: 2.3em;
  border-radius: 20px;
  border: 5px solid ${(props) => props.theme.maize};
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.maize};
  font-family: Poppins, sans-serif;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.maize};
    color: ${(props) => props.theme.black};
  }
  &:active {
    transform: translateY(4px);
  }
`;

export default Button;
