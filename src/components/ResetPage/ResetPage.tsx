import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { passwordReset } from '../../firebase/userAuthentication';
import { auth } from '../../firebase/firebase';
import Loader from '../Common/Loader';
import {
  Reset,
  Input,
  Register,
  ResetButton,
  ResetContainer,
} from './ResetPage.type';

const ResetPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
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
    <Reset>
      <ResetContainer>
        <Input
          value={email}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <ResetButton onClick={() => passwordReset(email)}>Reset</ResetButton>
        <Register>
          {showString}
          <Link to="/register">Register</Link>
        </Register>
      </ResetContainer>
    </Reset>
  );
};

export default ResetPage;
