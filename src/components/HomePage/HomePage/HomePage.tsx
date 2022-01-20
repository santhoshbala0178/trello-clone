import React, { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { Unsubscribe } from 'firebase/auth';
import {
  ContentContainer,
  HomePageContainer,
  Navigator,
  PageContainer,
  WorkSpaceContainer,
} from './HomePage.style';
import NavBarItem from '../NavBarItem';
import WorkspaceHeader from '../WorkspaceHeader';
import HomePageHeader from '../HomePageHeader';
import HomePageWorkspace from '../HomePageWorkspace';
import { getAllWorkspacesQuery } from '../../../firebase/manageData';
import { WorkspaceType } from '../HomePageWorkspace/HomePageWorkspace.type';
import Loader from '../../Common/Loader';

const HomePage = () => {
  const [workspaces, setWorkspaces] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get all workspace data using snapshot and unsubscribe while unmounting
    const q = getAllWorkspacesQuery();
    if (q) {
      const unsubscribe: Unsubscribe = onSnapshot(q, async (querySnapshot) => {
        setLoading(true);
        if (!querySnapshot.empty) {
          const dbWorkspaces: any = [];
          querySnapshot.forEach((eachDoc: any) =>
            dbWorkspaces.push(eachDoc.data())
          );
          await setWorkspaces([...dbWorkspaces]);
        }
        setLoading(false);
      });

      return unsubscribe;
    }
    return () => undefined;
  }, []);

  if (loading) return <Loader />;

  return (
    <HomePageContainer>
      <Navigator>
        <PageContainer>
          <NavBarItem name="Boards" isMainButton />
        </PageContainer>
        <WorkSpaceContainer>
          <WorkspaceHeader />
          {/*
            <WorkspaceButton />
            <WorkspaceButton />
            <WorkspaceButton />
          */}
        </WorkSpaceContainer>
      </Navigator>
      <ContentContainer>
        {/* 
          <HomePageHeader iconPath="star" text="Starred boards" />
          <HomePageBoard name="New" />
        */}
        <HomePageHeader iconPath="user" text="Your workspaces" />
        {workspaces?.length > 0 &&
          workspaces.map((workspace: WorkspaceType) => (
            <HomePageWorkspace workspace={workspace} key={workspace?.name} />
          ))}
      </ContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
