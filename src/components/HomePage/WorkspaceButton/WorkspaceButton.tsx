import React, { useState } from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import IconHolder from "../../Common/IconHolder/IconHolder";
import WorkSpaceButtonContainer from "./WorkspaceButton.style";
import { IconContainer } from "../../Banner/BannerButton/BannerButton.style";

const WorkspaceButton = () => {
  const [workspaceSelected, setWorkspaceSelected] = useState(false);

  const onWorkspaceSelect = () => {
    setWorkspaceSelected(!workspaceSelected);
  };

  return (
    <>
      <WorkSpaceButtonContainer onClick={onWorkspaceSelect}>
        <span>new</span>
        <IconContainer>
          <IconHolder
            path={
              workspaceSelected ? "assets/UpArrow.svg" : "assets/DownArrow.svg"
            }
            width={16}
            color="#000"
          />
        </IconContainer>
      </WorkSpaceButtonContainer>
      {workspaceSelected && <NavBarItem name="Boards" isMainButton={false} />}
    </>
  );
};

export default WorkspaceButton;
