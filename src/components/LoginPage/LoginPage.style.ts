import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.4);
  border-radius: 4px;
  padding: 20px 30px;
`;

export const BlockContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: solid 1px;
`;

export const LoginButton = styled.button`
  padding: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.colors.bannerColor};
  border-radius: 4px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  &: hover {
    background-color: ${(props) => props.theme.colors.blue};
  }
`;

export const LoginPageLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.bannerColor};
  margin-bottom: 5px;

  &: hover {
    text-decoration: underline;
  }
`;
