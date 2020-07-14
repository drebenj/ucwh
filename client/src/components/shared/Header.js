import styled from "styled-components";

const Header = styled.h1`
  max-width: 20em;
  margin: 0;
  text-align: center;
  font-size: 50px;
  color: ${(props) => props.theme.maize};
  @media (max-width: 45em) {
    font-size: 40px;
  }
`;

export default Header;
