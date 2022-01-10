import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signIn, signInWithGoogle } from '../../firebase/userAuthentication';
import { auth } from '../../firebase/firebase';
import Loader from '../Common/Loader';
import {
  Input,
  LoginButton,
  LoginContainer,
  LoginPageContainer,
  LoginPageLink,
  BlockContainer,
} from './LoginPage.style';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, loadState] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loadState) {
      setLoading(true);
      return;
    }
    setLoading(false);
    if (user) navigate('/home');
  }, [user, loadState]);

  if (loading) return <Loader />;

  return (
    <LoginPageContainer>
      <LoginContainer>
        <BlockContainer>
          <Input
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </BlockContainer>
        <BlockContainer>
          <LoginButton onClick={() => signIn(email, password)}>
            Login
          </LoginButton>
          <LoginButton onClick={signInWithGoogle}>
            Login with Google
          </LoginButton>
        </BlockContainer>
        <BlockContainer>
          <LoginPageLink to="/reset">Forgot Password</LoginPageLink>
          <LoginPageLink to="/register">Sign up for an account</LoginPageLink>
        </BlockContainer>
      </LoginContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
