export type HomePageBoardType = {
  workspaceName: string;
  board: BoardType;
};

export type StarIconContainerType = {
  isClicked: boolean;
};

export type BoardType = {
  starred: boolean;
  name: string;
};
