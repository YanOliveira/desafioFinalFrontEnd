import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles/defaults';

export const Container = styled.div`
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${metrics.basePadding * 2}px;
  height: 60px;
  width: 100%;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    margin-right: ${metrics.baseMargin * 2}px;
  }
  ul {
    li {
      padding: 15px;
      a {
        font-size: ${fonts.regular}px;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  font-size: ${fonts.larger}px;
  &:hover {
    cursor: pointer;
  }
`;
