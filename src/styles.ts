import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    background: #fafafa;
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

export const Container = styled.div`
  width: 330px;
  height: 500px;
  background: #000;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;

  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.8);
`;

export const Display = styled.div`
  background: #f3f3f3;
  width: 300px;
  height: 80px;

  display: flex;
  align-items: center;

  font-size: 30px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  p {
    margin-left: auto;
    padding: 15px;
  }
`;

export const ContainerKeyboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const TheKeyBoard = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const KeyBtn = styled.button`
  height: 68px;
  width: 68px;
  padding: 5px;
  margin: 3px;
  background: grey;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
`;
