import React, { useEffect, useState } from 'react';
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
import {
  addNewBoard,
  getAllWorkspaceNames,
  getBoard,
} from '../../../firebase/manageData';

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const CreateBoardPopup: React.FC<Props> = ({ popupStateActionProp }) => {
  const [allWorkspaces, setAllWorspaces] = useState<any>([]);

  const closePopup = () => {
    popupStateActionProp(CREATE_BOARD_POPUP, false);
  };

  const [boardName, setBoardName] = useState('');
  const [workspace, setWorkspace] = useState('');
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

  const getWorkspaces = async () => {
    const workspaces: any = await getAllWorkspaceNames();
    setAllWorspaces([...workspaces]);
  };

  useEffect(() => {
    getWorkspaces();
  }, []);

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
            <WorkspaceDropdown onChange={onWorspaceSelect}>
              {allWorkspaces.map((workspaceName: string, idx: number) => (
                <option value={workspaceName} selected={idx === 0}>
                  {workspaceName}
                </option>
              ))}
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
