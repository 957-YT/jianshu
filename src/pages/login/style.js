import styled from 'styled-components';

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 65px;
  background-color: #eee
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  padding-top: 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin: 10px auto;
  padding: 0 10px;
  color: #777;
`;

export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  margin: 10px auto;
  color: #fff;
  border-radius: 15px;
  text-align: center;
  background-color: #3194d0;
`;