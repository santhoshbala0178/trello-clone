import React from "react";
import HomePageWorkspaceType from "./HomePageWorkspace.type";
import HomePageBoard from "../HomePageBoard/HomePageBoard";
import CreateBoard from "../CreateBoard/CreateBoard";
import {
  WorkspaceContainer,
  WorkspaceName,
  ContentContainer,
} from "./HomePageWorkspace.style";

const HomePageWorkspace = ({ name }: HomePageWorkspaceType) => (
  <WorkspaceContainer>
    <WorkspaceName>{name}</WorkspaceName>
    <ContentContainer>
      <HomePageBoard name="One more" />
      <CreateBoard />
    </ContentContainer>
  </WorkspaceContainer>
);

export default HomePageWorkspace;
