import React from 'react';
import { HomePageWorkspaceType } from './HomePageWorkspace.type';
import HomePageBoard from '../HomePageBoard/HomePageBoard';
import CreateBoard from '../CreateBoard/CreateBoard';
import {
  WorkspaceContainer,
  WorkspaceName,
  ContentContainer,
  WorkspaceIcon,
  LetterContainer,
  Header,
} from './HomePageWorkspace.style';

const HomePageWorkspace = ({ name }: HomePageWorkspaceType) => (
  <WorkspaceContainer>
    <Header>
      <WorkspaceIcon code={name.charCodeAt(0)}>
        <LetterContainer>{name.substring(0, 1)}</LetterContainer>
      </WorkspaceIcon>
      <WorkspaceName>{name}</WorkspaceName>
    </Header>
    <ContentContainer>
      <HomePageBoard name="One more" />
      <CreateBoard />
    </ContentContainer>
  </WorkspaceContainer>
);

export default HomePageWorkspace;
