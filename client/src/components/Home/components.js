import styled, { css } from "styled-components";
import Header from "../shared/Header";
import Button from "../shared/Button";

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  width: 100%;
  height: 5em;
  border-radius: 20px;
  background: ${(props) => props.theme.black};
  @media (max-width: 45em) {
    position: fixed;
    top: 0px;
  }
`;

export const LargeLabel = styled(Header)`
  margin: 1em;
  text-align: none;
  font-size: 30px;
  display: inline;
  @media (max-width: 45em) {
    font-size: 20px;
  }
`;

export const SecondaryLabel = styled.p`
  display: inline;
  margin: 0px;
  padding: 0px;
  color: ${(props) => props.theme.flame};
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 42em;
  justify-content: space-around;
  flex-direction: column;
  @media (max-width: 45em) {
    height: 52em;
  }
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 45em) {
  }
`;

export const BottomWrap = styled.div`
  display: flex;
  position: fixed;
  font-size: 20px;
  width: 100%;
  bottom: 1em;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 55em) {
    p {
      display: none;
    }
  }
`;

export const RosterWrap = styled.ul`
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  scrollbar-width: none;
  padding: 0px;
  margin-bottom: 4em;
  list-style-type: none;
  text-align: center;
  overflow-y: scroll;
  max-height: 500px;
  @media (max-width: 45em) {
    height: 38em;
    margin-bottom: 4em;
  }
`;

export const StyledButton = styled(Button)`
  @media (max-width: 45em) {
    font-size: 20px;
    width: 40%;
  }
`;

export const RCard = styled(Button)`
  margin: 10px;
  font-size: 18px;
  height: 4em;
  width: 16em;
  border: none;
  color: black;
  background: ${(props) => props.theme.saphire};
  &:hover {
    background: ${(props) => props.theme.flame};
  }
  ${(props) =>
    props.admin &&
    css`
      background: ${(props) => props.theme.maize};
      &:hover {
        background: ${(props) => props.theme.flame};
      }
    `}

  ${(props) =>
    props.accepted &&
    css`
      background: #99e1d9;
      &:hover {
        background: ${(props) => props.theme.flame};
      }
    `}
`;
