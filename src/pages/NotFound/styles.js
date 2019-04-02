import styled from 'styled-components';
import { colors } from '../../styles/defaults';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  align-items: center;
  padding-top: 50px;
  font-size: 40px;
  color: ${colors.dark};
  strong {
    margin-top: 20px;
    font-size: 20px;
  }
`;
