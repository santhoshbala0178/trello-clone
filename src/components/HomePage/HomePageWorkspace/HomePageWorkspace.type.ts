import { BoardType } from '../HomePageBoard/HomePageBoard.type';

export type HomePageWorkspaceType = {
  workspace: WorkspaceType;
};

export type WorkspaceType = {
  name: string;
  boards?: BoardType[];
};

export type WorspaceIconType = {
  code: number;
};
