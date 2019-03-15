import styled from "styled-components";
import { colors, fonts } from "./defaults";

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
  input[type="checkbox"] {
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
  input[type="checkbox"] + label span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: ${colors.dark};
  }
  input[type="checkbox"]:checked + label span {
    background: ${colors.primary};
  }
`;

export const Form = styled.form`
  width: 315px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    font-size: ${fonts.regular};
    color: ${colors.white};
    font-weight: bold;
    margin-top: 20px;
  }
  input,
  textarea {
    background: transparent;
    width: 300px;
    margin: 10px 0;
    font-size: ${fonts.large};
    color: ${colors.lighter};
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px ${colors.secondary} inset !important;
      -webkit-text-fill-color: ${colors.white} !important;
    }
    &:invalid {
      box-shadow: none;
    }
  }
  textarea {
    resize: none;
    overflow: hidden;
  }
  // input[type="file"] {
  //   display: none;
  // }
  // span.fileUpdate {
  //   width: 100%;
  //   height: 80px;
  //   margin-top: 10px;
  //   background-color: transparent;
  //   border: 1px dashed ${colors.regular};
  //   border-radius: 5px;
  //   color: #fff;
  //   cursor: pointer;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   .icon {
  //     color: ${colors.regular};
  //     font-size: ${fonts.larger};
  //   }
  // }
`;
export const File = styled.div`
  display: flex;
  span {
    width: 100%;
    height: 80px;
    margin-top: 10px;
    background-color: transparent;
    border: 1px dashed ${colors.regular};
    border-radius: 5px;
    color: ${colors.lighter};
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      color: ${colors.regular};
      font-size: ${fonts.larger};
    }
  }
  input {
    font-size: 65px;
    position: absolute;
    z-index: 2;
    opacity: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  margin: 30px 0 10px 0;
  width: 315px;
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
`;
