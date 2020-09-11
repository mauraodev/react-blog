import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  display: flex;

  align-items: center;

  color: #ffffff;
  font-weight: bold;

  .web {
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    img {
      margin-top: 56px;
      margin-right: 33px;

      @media (max-width: 768px) {
        margin-left: 32%;
        margin-right: 32%;
      }
    }
  }
`;