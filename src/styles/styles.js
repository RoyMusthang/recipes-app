import styled from 'styled-components';
import backgroundLogin from '../images/backGroundLogin.jpg';

export const DivBackgroundLogin = styled.div`
  width: 360px;
  height: 640px;
  background-image: url(${backgroundLogin});
  filter: brightness(60%);
`;
export const FormLogin = styled.form``;
export const DivLogin = styled.div`
  position: fixed;
  bottom: 50px;
  margin: 50% 60px;
`;
export const Input = styled.input`
  width: 240px;
  height: 40px;
  margin-top: 5px;
  padding-left: 10px;
  border-radius: 12px;
`;
export const ButtonLogin = styled.button`
  width: 140px;
  margin-left: 50px;
  margin-top: 5px;
  background-color: ;
  border-radius: 12px;
`;
