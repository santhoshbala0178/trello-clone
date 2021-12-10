import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signIn, signInWithGoogle } from '../../firebase/userAuthentication';
import { auth } from '../../firebase/firebase';
import Loader from '../Common/Loader';
import {
  Input,
  GoogleLoginButton,
  LoginButton,
  LoginContainer,
  LoginPageContainer,
  Register,
  ResetLink,
} from './LoginPage.style';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, loadState] = useAuthState(auth);
  const navigate = useNavigate();
  const showString = "Don't have an account?";

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
        <LoginButton onClick={() => signIn(email, password)}>Login</LoginButton>
        <GoogleLoginButton onClick={signInWithGoogle}>
          Login with Google
        </GoogleLoginButton>
        <ResetLink>
          <Link to="/reset">Forgot Password</Link>
        </ResetLink>
        <Register>
          {showString}
          <Link to="/register">Register</Link>
        </Register>
      </LoginContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
