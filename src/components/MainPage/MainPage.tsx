import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../constants/firebase/firebase";
import { RootState } from "../../store";
import Loader from "../Common/Loader";
import Banner from "../Banner/Banner/Banner";
import HomePage from "../HomePage/HomePage/HomePage";
import BoardPage from "../BoardPage/BoardPage/BoardPage";

const mapStateToProps = (state: RootState) => ({
  pageNavigateReducer: state.pageNavigateReducer,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const MainPage = ({ pageNavigateReducer }: Props) => {
  const [user, loadState] = useAuthState(auth);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const usersCollection = collection(db, "users");
      const userQuery = query(usersCollection, where("uid", "==", user?.uid));
      const docs = await getDocs(userQuery);
      console.log(docs);
      const dbUser = await (await getDocs(userQuery)).docs[0].data();
      setName(dbUser.name);
    } catch (err) {
      console.log("An error occured while fetching user data");
      console.log(err);
    }
  };

  useEffect(() => {
    if (loadState) {
      setLoading(true);
      return;
    }
    if (!user) {
      navigate("/");
      return;
    }
    fetchUserName();
    setLoading(false);
  }, [user, loadState]);

  if (loading) return <Loader />;

  return (
    <>
      <Banner userName={name} userEmail={user?.email} />
      {pageNavigateReducer.boardName.length === 0 && <HomePage />}
      {pageNavigateReducer.boardName.length > 0 && <BoardPage />}
    </>
  );
};

export default connector(MainPage);
