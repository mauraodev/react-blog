import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(#449fd8, #1b699a);
  height: 45px;
  width: 195px;
  margin: 0 20px;
  border-radius: 20px;
  border: 0;
  padding: 0, 16px;
  color: #ffffff;
  font-size: 16px;
  transition: color 0.2s;

  &:hover {
    background: ${shade(0.2, '#449fd8')};
  }
`;
