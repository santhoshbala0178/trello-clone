import { NAVIGATE_TO_HOME, NAVIGATE_TO_BOARD } from '../../constants/actionTypes';
import { PageNavigateActionType, PageNavigateReducerType } from './pageNavigateReducer.type';

const defaultState = {
  boardName: '',
};

const pageNavigateReducer = (
  state = defaultState,
  action: PageNavigateActionType,
): PageNavigateReducerType => {
  switch (action.type) {
    case NAVIGATE_TO_HOME:
      return {
        ...state,
        boardName: action.payload,
      };
    case NAVIGATE_TO_BOARD:
      return {
        ...state,
        boardName: action.payload,
      };
    default:
      return state;
  }
};

export default pageNavigateReducer;
