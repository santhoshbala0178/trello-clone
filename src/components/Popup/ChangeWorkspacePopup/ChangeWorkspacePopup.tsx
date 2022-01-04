import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { CHANGE_WORKSPACE } from '../../../constants/actionTypes';
import {
  ChangeWorkspacePopupContainer,
  ChangeHeader,
  IconContainer,
  ChangeContent,
  Description,
  WorkspaceDropdown,
  ChangeButton,
} from './ChangeWorkspacePopup.style';
import IconHolder from '../../Common/IconHolder/IconHolder';
import popupStateAction from '../../../actions/popupStateAction';
import ChangeWorkspacePopupType from './ChangeWorkspacePopup.type';

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & ChangeWorkspacePopupType;

const ChangeWorkspacePopup: React.FC<Props> = ({
  position,
  popupStateActionProp,
}) => {
  const closePopup = () => {
    popupStateActionProp(CHANGE_WORKSPACE, false);
  };

  return (
    <ChangeWorkspacePopupContainer position={position}>
      <ChangeHeader>
        Change Workspace
        <IconContainer onClick={closePopup}>
          <IconHolder name="close" color="#000" />
        </IconContainer>
      </ChangeHeader>
      <ChangeContent>
        <Description>This board is part of..</Description>
        <WorkspaceDropdown>
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </WorkspaceDropdown>
        <ChangeButton>Change</ChangeButton>
      </ChangeContent>
    </ChangeWorkspacePopupContainer>
  );
};

export default connector(ChangeWorkspacePopup);
