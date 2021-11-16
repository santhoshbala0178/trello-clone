import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { CREATE_BOARD_POPUP } from "../../../constants/actionTypes";
import { RootState } from "../../../store";
import { CreateNewBoard, CreateBoardText } from "./CreateBoard.style";
import popupStateAction from "../../../actions/popupStateAction";

const mapStateToProps = (state: RootState) => ({
  popupStateReducer: state.popupStateReducer,
});

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const CreateBoard: React.FC<Props> = ({
  popupStateReducer,
  popupStateActionProp,
}) => {
  const dispatch = useDispatch();

  const onCreateNewBoard = () => {
    dispatch(
      popupStateActionProp(
        CREATE_BOARD_POPUP,
        !popupStateReducer.createWorkspacePopup
      )
    );
  };

  return (
    <>
      <CreateNewBoard onClick={onCreateNewBoard}>
        <CreateBoardText>Create new board</CreateBoardText>
      </CreateNewBoard>
    </>
  );
};

export default connector(CreateBoard);
