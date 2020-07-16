import styled from "styled-components";
import Header from "../shared/Header";

export const P = styled.p`
  font-size: 18px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  line-height: 1.5em;
  padding: 1em;
  color: ${(props) => props.theme.maize};
  text-align: left;
  border: 3px solid ${(props) => props.theme.maize};
  border-radius: 20px;
`;

export const Label = styled.h3`
  color: ${(props) => props.theme.saphire};
  margin: 0;
  text-align: center;
  margin-top: 2em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em;
`;

export const CenterWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 2em;
`;

export const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeader = styled(Header)`
  margin: 0 auto;
`;
