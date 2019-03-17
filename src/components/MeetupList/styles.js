import styled from 'styled-components';
import { fonts } from '../../styles/defaults';

export const Container = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  > strong {
    font-size: ${fonts.regular};
    margin-bottom: 20px;
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
`;
