import { ADD_NEW_CARD, ADD_NEW_LIST } from "../../constants/actionTypes";
import { AddItemActionType, AddItemReducerType } from "./addItemReducer.type";

const defaultState = {
  addCard: false,
  addList: false,
};

const AddItemReducer = (
  state = defaultState,
  action: AddItemActionType
): AddItemReducerType => {
  switch (action.type) {
    case ADD_NEW_CARD:
      return {
        ...state,
        addCard: action.payload,
      };
    case ADD_NEW_LIST:
      return {
        ...state,
        addList: action.payload,
      };
    default:
      return state;
  }
};

export default AddItemReducer;
