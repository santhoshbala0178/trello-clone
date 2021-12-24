import React, { useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { CREATE_WORKSPACE_POPUP } from '../../../constants/actionTypes';
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
  ErrorText,
} from './CreateWorkspacePopup.style';
import { IconContainer } from '../CreatePopup/CreatePopup.style';
import IconHolder from '../../Common/IconHolder/IconHolder';
import popupStateAction from '../../../actions/popupStateAction';
import { addNewWorkspace, getWorkspace } from '../../../firebase/manageData';

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
    'Boost your productivity by making it easier for everyone to access boards in one location.';
  const [workSpaceName, setWorkspaceName] = useState('');
  const [error, setError] = useState(false);

  const onNameEdit = (e: React.FormEvent<HTMLInputElement>) => {
    setWorkspaceName(e?.currentTarget?.value);
    setError(false);
  };

  const createNewWorkspace = async () => {
    const workspace = await getWorkspace(workSpaceName);
    if (workspace === '') {
      addNewWorkspace(workSpaceName);
    } else {
      setError(true);
    }
  };

  return (
    <PopupHolder onClick={closePopup}>
      <CreateWorkSpace onClick={(e) => e.stopPropagation()}>
        <Header>
          {headerText}
          <IconContainer onClick={closePopup}>
            <IconHolder name="close" color="#000" />
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
          <ErrorText>{error ? 'Worspace Already Exists' : ''}</ErrorText>
          <CreateButton
            disabled={workSpaceName.length === 0 || error}
            onClick={createNewWorkspace}
          >
            Create
          </CreateButton>
        </CreateWorkspaceContainer>
      </CreateWorkSpace>
    </PopupHolder>
  );
};

export default connector(CreateWorkSpacePopup);
