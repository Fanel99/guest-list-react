/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  border-radius: 15px;
  max-width: 100%;
  min-height: 50vh;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(
    90deg,
    #f0f8ff,
    #eff4ff,
    #f3efff,
    #fbe9fa,
    #ffe3f0,
    #ffdfe1,
    #ffdcd1,
    #ffdcc2
  );

  h1 {
    font-size: 70px;
    margin-top: 100px;
    margin-bottom: 50px;
    background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    &:hover {
      transform: scale(1.1);
    }
  }

  input {
    margin: 10px;
    padding: 5px;
    border-radius: 8px;
  }

  button {
    color: #30cfd0;
    background-color: #330867;
    padding: 5px;
    border-radius: 8px;
    margin-left: 30px;

    &:hover {
      transform: scale(1.2);
    }
  }

  h2 {
    margin-top: 50px;
    font-size: 40px;
    background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  ul {
    list-style: none;

    li {
      font-size: 20px;
    }
  }
  span button {
    margin-left: 10px;
    color: red;
    font-size: 10px;
    background-color: #fff;
  }
`;
