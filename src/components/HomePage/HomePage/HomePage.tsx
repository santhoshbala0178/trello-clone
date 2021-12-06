import React from 'react';
import {
  ContentContainer,
  HomePageContainer,
  Navigator,
  PageContainer,
  WorkSpaceContainer,
} from './HomePage.style';
import NavBarItem from '../NavBarItem/NavBarItem';
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader';
import WorkspaceButton from '../WorkspaceButton/WorkspaceButton';
import HomePageHeader from '../HomePageHeader/HomePageHeader';
import HomePageBoard from '../HomePageBoard/HomePageBoard';
import HomePageWorkspace from '../HomePageWorkspace/HomePageWorkspace';

const HomePage = () => (
  <HomePageContainer>
    <Navigator>
      <PageContainer>
        <NavBarItem name="Boards" isMainButton />
      </PageContainer>
      <WorkSpaceContainer>
        <WorkspaceHeader />
        <WorkspaceButton />
        <WorkspaceButton />
        <WorkspaceButton />
      </WorkSpaceContainer>
    </Navigator>
    <ContentContainer>
      <HomePageHeader iconPath="star" text="Starred boards" />
      <HomePageBoard name="New" />
      <HomePageHeader iconPath="user" text="Your workspaces" />
      <HomePageWorkspace name="New" />
      <HomePageWorkspace name="One More" />
    </ContentContainer>
  </HomePageContainer>
);

export default HomePage;
