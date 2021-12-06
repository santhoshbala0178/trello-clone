const addItemAction = (type: string, addItem: boolean, listName?: string) => ({
  type,
  payload: addItem,
  listName,
});

export default addItemAction;
