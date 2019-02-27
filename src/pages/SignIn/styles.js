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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  span {
    margin: 0 10px;
    font-size: ${fonts.regular};
    color: ${colors.lighter};
    margin-top: 20px;
  }

  input {
    background: transparent;
    width: 300px;
    padding: 10px;
    font-size: ${fonts.large};
    color: ${colors.lighter};
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px ${colors.secondary} inset !important;
      -webkit-text-fill-color: ${colors.white} !important;
    }
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
