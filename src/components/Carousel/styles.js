import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 426px;
  width: 322px;
  margin: 0 10px;

  background: linear-gradient(#449fd8, #1b699a);
  border-radius: 7px;
  transition: all 0.3s linear;

      img {
        margin-top: 23px;
        height: 115px;
        width: 115px;

        }

      h1 {
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        width: 90%;
        }

      p {
        font-weight: lighter;
        font-size: 14px;
        width: 90%;
        }

      button {
        background-color: #2F2C2C;
        text-transform: uppercase;
        color: #fff;
        width: 196px;
        height: 36px;
        border-radius: 20px;
        border: 0;
        transition: color 0.2s;
        margin-bottom: 19px;
        }

      hr {
        color: #000;
        border-top: 1px solid;
        width: 90%;
        opacity: 10%;
        }
    }
`;
