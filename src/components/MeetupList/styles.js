import styled from "styled-components";
import { colors, fonts } from "../../styles/defaults";

export const Container = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
