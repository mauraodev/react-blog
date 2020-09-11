import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: #2f2c2c;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 7rem;
    margin: 0;
    transition: transform 0.3s ease-in-out;
  }

  a {
    color: #ffffff;
    margin: 37px 57px 0 0;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ffffff')};
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;

      margin: 0;
      margin-left: 24px;
      margin-bottom: 22px;
      color: #fff;
      font-size: 20px;
      transition: color 0.2s;
      }
    }

`;

