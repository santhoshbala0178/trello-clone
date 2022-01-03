import React, { useEffect, useCallback, useState } from 'react';
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
import { getAllWorkspaces } from '../../../firebase/manageData';
import { WorkspaceType } from '../HomePageWorkspace/HomePageWorkspace.type';

const HomePage = () => {
  const [workspaces, setWorkspaces] = useState<any>();

  const getData = useCallback(async () => {
    await getAllWorkspaces(setWorkspaces);
  }, []);

  useEffect(() => {
    getData();
  }, []);

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
