import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { ADD_NEW_CARD, ADD_NEW_LIST } from "../../../constants/actionTypes";
import { RootState } from "../../../store";
import {
  AddNewItemContainer,
  TextContainer,
  IconContainer,
  AddNewItemHolder,
} from "./AddNewItem.style";
import AddNewItemType from "./AddNewItem.type";
import IconHolder from "../../Common/IconHolder/IconHolder";
import NewItem from "../NewItem/NewItem";
import addItemAction from "../../../actions/addItemAction";

const addCard = "Add a card";
const addList = "Add another list";

const mapStateToProps = (state: RootState) => ({
  addItemReducer: state.addItemReducer,
});

const mapDispatchToProps = {
  addItemActionProp: addItemAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & AddNewItemType;

const AddNewItem = ({ type, addItemReducer, addItemActionProp }: Props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    if (type === "card") {
      dispatch(addItemActionProp(ADD_NEW_CARD, !addItemReducer.addCard));
    } else {
      dispatch(addItemActionProp(ADD_NEW_LIST, !addItemReducer.addList));
    }
  };

  return (
    <AddNewItemHolder isAddList={addItemReducer.addList} type={type}>
      {((type === "card" && !addItemReducer.addCard) ||
        (type === "list" && !addItemReducer.addList)) && (
        <AddNewItemContainer type={type} onClick={onClick}>
          <IconContainer>
            <IconHolder path="assets/PlusIcon.svg" width={14} color="#5e6c84" />
          </IconContainer>
          <TextContainer>{type === "card" ? addCard : addList}</TextContainer>
        </AddNewItemContainer>
      )}
      {((type === "card" && addItemReducer.addCard) ||
        (type === "list" && addItemReducer.addList)) && <NewItem type={type} />}
    </AddNewItemHolder>
  );
};

export default connector(AddNewItem);
