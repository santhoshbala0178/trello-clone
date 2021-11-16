import React, { useState } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { CREATE_BOARD_POPUP } from "../../../constants/actionTypes";
import IconHolder from "../../Common/IconHolder/IconHolder";
import popupStateAction from "../../../actions/popupStateAction";
import {
  Header,
  PopupHolder,
  CreateBoardDiv,
  CreateBoardContainer,
  CreateButton,
  BoardName,
  BoardNameEditor,
  IconContainer,
} from "./CreateBoardPopup.style";

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const CreateWorkSpacePopup: React.FC<Props> = ({ popupStateActionProp }) => {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(popupStateActionProp(CREATE_BOARD_POPUP, false));
  };

  const [boardName, setBoardName] = useState("");

  const onNameEdit = (e: React.FormEvent<HTMLInputElement>) => {
    setBoardName(e?.currentTarget?.value);
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
          </BoardName>
          <IconContainer onClick={closePopup}>
            <IconHolder path="assets/CloseIcon.svg" width={22} color="#000" />
          </IconContainer>
        </Header>
        <CreateBoardContainer>
          <CreateButton disabled={boardName.length === 0}>
            Create Board
          </CreateButton>
        </CreateBoardContainer>
      </CreateBoardDiv>
    </PopupHolder>
  );
};

export default connector(CreateWorkSpacePopup);
