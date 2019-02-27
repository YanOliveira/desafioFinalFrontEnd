import styled from "styled-components";
import { colors, fonts } from "../../styles/defaults";

export const Container = styled.div`
  width: 315px;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  strong {
    font-size: ${fonts.larger};
  }
  p {
    margin: 20px 0;
    font-size: ${fonts.regular};
    opacity: 0.8;
  }
`;
