import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 114px;
  width: 100%;
  color: #888888;

  hr {
      color: #221F1F;
      border-top: 1px solid;
      width: 90%;
      opacity: 10%;
  }

  h1 {
    margin-top: 37px;
    font-size: 16px;
    font-weight: bold;
  }
  p{
    margin-top: 7px;
    font-size: 14px;
    font-weight: lighter;
  }
`;
