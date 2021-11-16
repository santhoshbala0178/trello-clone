import React, { useState } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { CREATE_WORKSPACE_POPUP } from "../../../constants/actionTypes";
import {
  PopupHolder,
  CreateWorkSpace,
  Header,
  Description,
  WorkSpaceName,
  TextHolder,
  WorkspaceNameEditor,
  WorkspaceNameDescription,
  CreateButton,
  CreateWorkspaceContainer,
} from "./CreateWorkspacePopup.style";
import { IconContainer } from "../CreatePopup/CreatePopup.style";
import IconHolder from "../../Common/IconHolder/IconHolder";
import popupStateAction from "../../../actions/popupStateAction";

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const CreateWorkSpacePopup: React.FC<Props> = ({ popupStateActionProp }) => {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(popupStateActionProp(CREATE_WORKSPACE_POPUP, false));
  };

  const headerText = "Let's build a Workspace";
  const descriptionText =
    "Boost your productivity by making it easier for everyone to access boards in one location.";
  const [workSpaceName, setWorkspaceName] = useState("");

  const onNameEdit = (e: React.FormEvent<HTMLInputElement>) => {
    setWorkspaceName(e?.currentTarget?.value);
  };

  return (
    <PopupHolder onClick={closePopup}>
      <CreateWorkSpace onClick={(e) => e.stopPropagation()}>
        <Header>
          {headerText}
          <IconContainer onClick={closePopup}>
            <IconHolder path="assets/CloseIcon.svg" width={22} color="#000" />
          </IconContainer>
        </Header>
        <Description>{descriptionText}</Description>
        <CreateWorkspaceContainer>
          <WorkSpaceName>
            <TextHolder>Workspace name</TextHolder>
            <WorkspaceNameEditor
              placeholder="Taco's Co."
              value={workSpaceName}
              onChange={onNameEdit}
            />
            <WorkspaceNameDescription>
              This is the name of your company, team or organization.
            </WorkspaceNameDescription>
          </WorkSpaceName>

          <CreateButton disabled={workSpaceName.length === 0}>
            Create
          </CreateButton>
        </CreateWorkspaceContainer>
      </CreateWorkSpace>
    </PopupHolder>
  );
};

export default connector(CreateWorkSpacePopup);
