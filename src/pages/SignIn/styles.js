import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles/defaults';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${colors.secondary};
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
    font-size: ${fonts.regular}px;
    color: ${colors.regular};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  span {
    margin: 0 10px;
    font-size: ${fonts.regular}px;
    color: ${colors.lighter};
    margin-top: 20px;
  }

  input {
    background: transparent;
    width: 300px;
    padding: 10px;
    font-size: ${fonts.large}px;
    color: ${colors.lighter};
  }

  button {
    margin: 20px 0;
    width: 300px;
    height: 50px;
    border-radius: 30px;
    font-size: ${fonts.regular}px;
    color: ${colors.lighter};
    background: ${colors.primary};
    font-weight: bold;
  }
`;
