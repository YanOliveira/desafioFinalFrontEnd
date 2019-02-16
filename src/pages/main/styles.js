import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles/defaults';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${colors.secondary};
  color: ${colors.lighter};
`;
