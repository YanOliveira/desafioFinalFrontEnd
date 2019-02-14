import styled from 'styled-components';
import { colors, metrics, fonts } from '../../styles/defaults';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.secondary};
  color: ${colors.lighter};
  font-size: ${fonts.larger}px;
  padding: ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
`;
