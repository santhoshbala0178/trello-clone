import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { CHANGE_WORKSPACE } from "../../../constants/actionTypes";
import {
  ChangeWorkspacePopupContainer,
  ChangeHeader,
  IconContainer,
  ChangeContent,
  Description,
  WorkspaceDropdown,
  ChangeButton,
} from "./ChangeWorkspacePopup.style";
import IconHolder from "../../Common/IconHolder/IconHolder";
import popupStateAction from "../../../actions/popupStateAction";
import ChangeWorkspacePopupType from "./ChangeWorkspacePopup.type";

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & ChangeWorkspacePopupType;

const ChangeWorkspacePopup: React.FC<Props> = ({ popupStateActionProp }) => {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(popupStateActionProp(CHANGE_WORKSPACE, false));
  };

  return (
    <ChangeWorkspacePopupContainer>
      <ChangeHeader>
        Change Workspace
        <IconContainer onClick={closePopup}>
          <IconHolder path="assets/CloseIcon.svg" width={16} color="#000" />
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
