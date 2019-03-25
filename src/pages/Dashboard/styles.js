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
`;

export const Search = styled.div`
  width: 100%;
  background: ${colors.whiteTransparent};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div.logo {
    padding-left: 10px;
    color: ${colors.regular};
  }
  input {
    width: 100%;
    padding: 10px;
    font-size: ${fonts.regular};
    background: transparent;
    color: ${colors.regular};

    &::-webkit-input-placeholder {
      color: ${colors.regular};
    }
    &::-moz-placeholder {
      color: ${colors.regular};
    }

    &:-ms-input-placeholder {
      color: ${colors.lighter};
    }
  }
`;
