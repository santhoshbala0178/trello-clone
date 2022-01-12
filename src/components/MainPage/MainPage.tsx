import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import Loader from '../Common/Loader';
import Banner from '../Banner/Banner';
import HomePage from '../HomePage/HomePage';
import BoardPage from '../BoardPage/BoardPage';
import MainPageContainer from './MainPage.style';

const MainPage = () => {
  const [user, loadState] = useAuthState(auth);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const usersCollection = collection(db, 'users');
      const userQuery = query(usersCollection, where('uid', '==', user?.uid));
      const docs = await getDocs(userQuery);
      const dbUser = await (await getDocs(userQuery)).docs[0].data();
      setName(dbUser.name);
    } catch (err) {
      console.log('An error occured while fetching user data');
      console.log(err);
    }
  };

  useEffect(() => {
    if (loadState) {
      setLoading(true);
      return;
    }
    if (!user) {
      navigate('/');
      return;
    }
    fetchUserName();
    setLoading(false);
  }, [user, loadState]);

  if (loadState) return <Loader />;

  return (
    <MainPageContainer>
      <Banner userName={name} userEmail={user?.email} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":workspaceName/:boardName" element={<BoardPage />} />
      </Routes>
    </MainPageContainer>
  );
};

export default MainPage;
