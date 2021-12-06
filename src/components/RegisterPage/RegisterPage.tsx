import React, { useEffect, useState } from 'react';
import {
  Link, useNavigate,
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { registerUser, signInWithGoogle } from '../../constants/firebase/userAuthentication';
import { auth } from '../../constants/firebase/firebase';
import Loader from '../Common/Loader';
import {
  Register, RegisterContainer, Input, RegisterButton, GoogleLoginButton, Login,
} from './RegisterPage.style';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
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
    <Register>
      <RegisterContainer>
        <Input
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <RegisterButton
          onClick={() => registerUser(name, email, password)}
        >
          Register
        </RegisterButton>
        <GoogleLoginButton
          onClick={signInWithGoogle}
        >
          Login with Google
        </GoogleLoginButton>
        <Login>
          Already have an account?
          <Link to="/">Login</Link>
        </Login>
      </RegisterContainer>
    </Register>
  );
};

export default RegisterPage;
