import styled from "styled-components";
import { colors, fonts } from "../../styles/defaults";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  img {
    width: 900px;
    height: 400px;
  }
  button {
    margin: 20px 0;
    width: 300px;
    height: 50px;
    border-radius: 30px;
    font-size: ${fonts.regular};
    color: ${colors.lighter};
    background: ${colors.primary};
    font-weight: bold;
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

export const Info = styled.div`
  width: 315px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: left;
  strong {
    font-size: ${fonts.larger};
    color: ${colors.white};
  }
  span {
    font-size: ${fonts.small};
    color: ${colors.regular};
    margin: 5px 0;
  }
  p {
    font-size: ${fonts.regular};
    color: ${colors.light};
    margin: 30px 0;
  }
  small {
    font-size: ${fonts.small};
    color: ${colors.light};
    margin: 5px 0;
  }
`;
