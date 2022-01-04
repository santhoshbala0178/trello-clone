import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { CREATE_BOARD_POPUP } from '../../../constants/actionTypes';
import IconHolder from '../../Common/IconHolder/IconHolder';
import popupStateAction from '../../../actions/popupStateAction';
import {
  Header,
  PopupHolder,
  CreateBoardDiv,
  CreateBoardContainer,
  CreateButton,
  BoardName,
  BoardNameEditor,
  IconContainer,
  WorkspaceDropdown,
  ErrorText,
} from './CreateBoardPopup.style';
import { addNewBoard, getBoard } from '../../../firebase/manageData';

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const CreateBoardPopup: React.FC<Props> = ({ popupStateActionProp }) => {
  const closePopup = () => {
    popupStateActionProp(CREATE_BOARD_POPUP, false);
  };

  const [boardName, setBoardName] = useState('');
  const [workspace, setWorkspace] = useState('New Workspace');
  const [error, setError] = useState(false);

  const onNameEdit = (e: React.FormEvent<HTMLInputElement>) => {
    setBoardName(e?.currentTarget?.value);
    setError(false);
  };

  const onWorspaceSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setWorkspace(e.currentTarget.value);
    setError(false);
  };

  const createNewBoard = async () => {
    const boardIdx = await getBoard(workspace, boardName, true);
    if (boardIdx === -1) {
      addNewBoard(workspace, boardName);
      closePopup();
    } else {
      setError(true);
    }
  };

  return (
    <PopupHolder onClick={closePopup}>
      <CreateBoardDiv onClick={(e) => e.stopPropagation()}>
        <Header>
          <BoardName>
            <BoardNameEditor
              placeholder="Add Board Title"
              value={boardName}
              onChange={onNameEdit}
            />
            <WorkspaceDropdown value={workspace} onChange={onWorspaceSelect}>
              <option value="New Workspace">New Workspace</option>
              <option value="as">as</option>
            </WorkspaceDropdown>
          </BoardName>
          <IconContainer onClick={closePopup}>
            <IconHolder name="close" color="#000" />
          </IconContainer>
        </Header>
        <ErrorText>
          {error ? 'Board Name already exists in the workspace' : ''}
        </ErrorText>
        <CreateBoardContainer>
          <CreateButton
            disabled={boardName.length === 0 || error}
            onClick={createNewBoard}
          >
            Create Board
          </CreateButton>
        </CreateBoardContainer>
      </CreateBoardDiv>
    </PopupHolder>
  );
};

export default connector(CreateBoardPopup);
