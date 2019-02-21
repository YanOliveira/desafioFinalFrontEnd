import styled from 'styled-components';
import { colors, fonts } from '../../styles/defaults';

export const Container = styled.div`
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 60px;
  width: 100%;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    margin-right: 20px;
  }
  ul {
    li {
      padding: 15px;
      a {
        font-size: ${fonts.regular};
        color: ${colors.white};
        font-weight: bold;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.5;
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
  font-size: ${fonts.larger};
  div {
    padding-top: 30px;
    font-size: ${fonts.regular};
    display: none;
    position: absolute;
    margin-top: 64px;
    ul {
      border: 1px solid ${colors.darker};
      background: ${colors.secondary};
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      padding: 10px;
      li {
        color: ${colors.white};
        display: flex;
        flex-direction: row;
        margin: 10px 10px;
        .icon {
          margin-right: 5px;
        }
        &:hover {
          cursor: pointer;
          opacity: 0.5;
        }
      }
    }
  }
  &:hover {
    cursor: pointer;
    .iconHeader {
      opacity: 0.5;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
