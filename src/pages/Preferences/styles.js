import styled from 'styled-components';
import { colors, fonts } from '../../styles/defaults';

export const Container = styled.div`
  width: 315px;
  height: 100%;
  margin: auto;
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

export const Checkboxes = styled.fieldset`
  font-size: ${fonts.medium};
  margin-top: 20px;
  border: 0;
  display: flex;
  flex-direction: column;
  legend {
    margin: 10px 0;
    font-size: ${fonts.regular};
    font-weight: bold;
  }
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
  input[type='checkbox'] {
    display: none;
  }
  label {
    display: flex;
    flex-direction: row;
    &:hover {
      cursor: pointer;
    }
    span {
      margin-right: 10px;
    }
  }
  input[type='checkbox'] + label span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: ${colors.dark};
  }
  input[type='checkbox']:checked + label span {
    background: ${colors.primary};
  }
`;
