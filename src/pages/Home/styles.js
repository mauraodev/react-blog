import styled from 'styled-components';

// import h1Background from '../../assets/h1Background.png';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;


  @media (max-width: 768px) {


  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;


  .h4-bg {
    background: #2F2C2C;
  }

`;
export const H1Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 121px 306px 0px 306px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 48px;
    text-align: center;

    @media (max-width: 768px) {
      width: 80%;
    }
  }

  h2 {
    margin: 50px 30% 0 30%;
    text-align: center;
    font-size: 20px;


  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 163px;
  }

  > svg {
    color: #2980b6;
    margin-top: 54px;
    height: 72px;
    width: 72px;
    transform: rotate(270deg);
  }
`;

export const H2Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;

  margin-top: 70px;

  img {
    margin-left: 0 80px;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-right: 0 104px;

    h1 {
      font-weight: bold;
      font-size: 32px;
      text-align: center;
      margin: 33px 0;
    }

    h2 {
      height: 245px;
      width: 506px;
    }
    @media (max-width: 768px) {
      width: 85%;
    }
  }
`;
export const H3Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  margin-top: 70px;

  .h3-title {
    display: flex;
    text-transform: uppercase;
    width: 60%;
  }
`;

export const H4Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 180px 65px 30px 65px;
  flex-wrap: wrap-reverse;


 .h4-description {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   margin-left: 128px;
   margin-right: 269px;
   width: 506px;
   height: 245px;

   text-align: center;

   @media (max-width: 768px) {
        width: 90%;
        margin: 0;
        margin-top: 33px;
      }

    h1 {
      text-transform: uppercase;
      font-size: 32px;
      font-weight: bold;


    }
    p {
      margin-top: 36px;
      font-size: 20px;
      font-weight: medium;

      @media (max-width: 768px) {
        /* height: 245px;
        width: 506px; */
        width: 100%;
      }

    }
  }
`;
