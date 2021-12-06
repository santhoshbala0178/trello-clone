import {
  CREATE_BOARD_POPUP,
  CREATE_POPUP,
  CREATE_WORKSPACE_POPUP,
  CHANGE_WORKSPACE,
  ACCOUNT_POPUP,
} from '../../constants/actionTypes';
import {
  PopupStateReducerType,
  PopupStateActionType,
} from './popupStateReducer.type';

const defaultState = {
  createPopup: false,
  createWorkspacePopup: false,
  createBoardPopup: false,
  changeWorkspace: false,
  accountPopup: false,
};

const popupStateReducer = (
  state = defaultState,
  action: PopupStateActionType,
): PopupStateReducerType => {
  switch (action.type) {
    case CREATE_POPUP:
      return {
        ...state,
        createPopup: action.payload,
      };
    case CREATE_WORKSPACE_POPUP:
      return {
        ...state,
        createWorkspacePopup: action.payload,
      };
    case CREATE_BOARD_POPUP:
      return {
        ...state,
        createBoardPopup: action.payload,
      };
    case CHANGE_WORKSPACE:
      return {
        ...state,
        changeWorkspace: action.payload,
      };
    case ACCOUNT_POPUP:
      return {
        ...state,
        accountPopup: action.payload,
      };
    default:
      return state;
  }
};

export default popupStateReducer;
