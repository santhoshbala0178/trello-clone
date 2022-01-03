import React from 'react';
import { HomePageWorkspaceType } from './HomePageWorkspace.type';
import HomePageBoard from '../HomePageBoard';
import CreateBoard from '../CreateBoard';
import {
  WorkspaceContainer,
  WorkspaceName,
  ContentContainer,
  WorkspaceIcon,
  LetterContainer,
  Header,
} from './HomePageWorkspace.style';

const HomePageWorkspace = ({ workspace }: HomePageWorkspaceType) => {
  console.log(workspace);
  return (
    <WorkspaceContainer>
      <Header>
        <WorkspaceIcon code={workspace?.name.charCodeAt(0)}>
          <LetterContainer>{workspace?.name.substring(0, 1)}</LetterContainer>
        </WorkspaceIcon>
        <WorkspaceName>{workspace?.name}</WorkspaceName>
      </Header>
      <ContentContainer>
        {workspace?.boards &&
          workspace.boards?.length > 0 &&
          workspace.boards.map((board) => (
            <HomePageBoard
              workspaceName={workspace?.name}
              board={board}
              key={board?.name}
            />
          ))}
        <CreateBoard />
      </ContentContainer>
    </WorkspaceContainer>
  );
};

export default HomePageWorkspace;
