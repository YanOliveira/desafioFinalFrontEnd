import styled from "styled-components";
import { colors, fonts } from "../../styles/defaults";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 10px;
  }
  a {
    font-size: ${fonts.regular};
    color: ${colors.regular};
  }
`;
