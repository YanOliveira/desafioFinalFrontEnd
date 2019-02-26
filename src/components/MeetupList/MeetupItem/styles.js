import styled from "styled-components";
import { colors, fonts } from "../../../styles/defaults";

export const Container = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 290px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  > div {
    background: ${colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    margin-top: -40px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    color: ${colors.darker};
    font-size: ${fonts.regular};
    margin-bottom: 5px;
  }
  span {
    color: ${colors.regular};
    font-size: ${fonts.small};
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: ${fonts.medium};
  color: ${colors.white};
  background: ${colors.primary};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
