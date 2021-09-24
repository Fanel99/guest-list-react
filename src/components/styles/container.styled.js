import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;

  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 70px;
    margin-top: 50px;
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
