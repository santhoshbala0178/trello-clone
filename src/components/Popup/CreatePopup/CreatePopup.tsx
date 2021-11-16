import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { CREATE_POPUP } from "../../../constants/actionTypes";
import {
  CreatePopupContainer,
  CreateHeader,
  IconContainer,
} from "./CreatePopup.style";
import CreatePopupButton from "../CreatePopupButton/CreatePopupButton";
import IconHolder from "../../Common/IconHolder/IconHolder";
import popupStateAction from "../../../actions/popupStateAction";

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const CreatePopup: React.FC<Props> = ({ popupStateActionProp }) => {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(popupStateActionProp(CREATE_POPUP, false));
  };

  return (
    <CreatePopupContainer>
      <CreateHeader>
        Create
        <IconContainer onClick={closePopup}>
          <IconHolder path="assets/CloseIcon.svg" width={16} color="#000" />
        </IconContainer>
      </CreateHeader>
      <div>
        <CreatePopupButton
          header="Create Board"
          description="A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything."
        />
        <CreatePopupButton
          header="Create Workspace"
          description="A Workspace is a group of boards and people. Use it to organize your company, side hustle, family, or friends."
        />
      </div>
    </CreatePopupContainer>
  );
};

export default connector(CreatePopup);
