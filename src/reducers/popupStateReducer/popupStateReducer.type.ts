export type PopupStateActionType = {
  type: string;
  payload: boolean;
};

export type PopupStateReducerType = {
  createPopup: boolean;
  createWorkspacePopup: boolean;
  createBoardPopup: boolean;
  changeWorkspace: boolean;
  accountPopup: boolean;
};
