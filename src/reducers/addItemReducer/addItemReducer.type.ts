export type AddItemActionType = {
  type: string;
  payload: boolean;
  listName?: string;
};

export type AddItemReducerType = {
  addCard: boolean;
  addList: boolean;
  listName?: string;
};
