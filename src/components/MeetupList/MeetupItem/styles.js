import styled from "styled-components";
import { colors, fonts } from "../../../styles/defaults";

export const Container = styled.div`
  width: 290px;
  height: 200px;
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  img {
    width: 290px;
  }
  > div {
    background: ${colors.white};
    display: flex;
    flex-direction: row !important;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-top: -30px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column !important;
  strong {
    color: ${colors.darker};
    font-size: ${fonts.regular};
  }
  span {
    color: ${colors.dark};
    font-size: ${fonts.small};
  }
`;

export const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  color: ${colors.white};
  background: ${colors.primary};
`;
