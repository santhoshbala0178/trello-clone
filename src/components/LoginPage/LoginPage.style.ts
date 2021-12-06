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
    background-color: #dcdcdc;
    padding: 30px;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const LoginButton = styled.button`
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    border: none;
    color: white;
    background-color: black;
`;

export const GoogleLoginButton = styled.button`
    background-color: #4285f4;
`;

export const ResetLink = styled.div``;

export const Register = styled.div`
    margin: 7px;
`;
