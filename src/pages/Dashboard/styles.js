import styled from 'styled-components';
import { colors, fonts } from '../../styles/defaults';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${colors.lighter};
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0;
  div.list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div.icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 30px 10px 0 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${colors.whiteTransparent};
      color: ${colors.regular};
      font-size: ${fonts.large};
      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
`;
