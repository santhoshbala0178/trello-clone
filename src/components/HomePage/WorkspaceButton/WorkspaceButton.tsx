import React, { useState } from 'react';
import NavBarItem from '../NavBarItem';
import IconHolder from '../../Common/IconHolder';
import WorkSpaceButtonContainer from './WorkspaceButton.style';
import { IconContainer } from '../../Banner/BannerButton/BannerButton.style';

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
            name={workspaceSelected ? 'upArrow' : 'downArrow'}
            color="#000"
            size="lg"
          />
        </IconContainer>
      </WorkSpaceButtonContainer>
      {workspaceSelected && <NavBarItem name="Boards" isMainButton={false} />}
    </>
  );
};

export default WorkspaceButton;
