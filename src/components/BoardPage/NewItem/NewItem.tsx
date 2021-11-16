import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { ADD_NEW_CARD, ADD_NEW_LIST } from "../../../constants/actionTypes";
import { RootState } from "../../../store";
import addItemAction from "../../../actions/addItemAction";
import IconHolder from "../../Common/IconHolder/IconHolder";
import AutoTextArea from "../AutoTextArea/AutoTextArea";
import NewItemType from "./NewItem.type";
import {
  ButtonContainer,
  NewItemContainer,
  IconContainer,
  AddButton,
} from "./NewItemstyle";

const mapStateToProps = (state: RootState) => ({
  addItemReducer: state.addItemReducer,
});

const mapDispatchToProps = {
  addItemActionProp: addItemAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & NewItemType;

const NewItem = ({ type, addItemReducer, addItemActionProp }: Props) => {
  const dispatch = useDispatch();

  const onClose = () => {
    if (type === "card") {
      dispatch(addItemActionProp(ADD_NEW_CARD, !addItemReducer.addCard));
    } else {
      dispatch(addItemActionProp(ADD_NEW_LIST, !addItemReducer.addList));
    }
  };

  return (
    <NewItemContainer>
      <AutoTextArea type={type} />
      <ButtonContainer>
        <AddButton>{`Add ${type}`}</AddButton>
        <IconContainer onClick={onClose}>
          <IconHolder path="assets/CloseIcon.svg" width={22} color="#000" />
        </IconContainer>
      </ButtonContainer>
    </NewItemContainer>
  );
};

export default connector(NewItem);
