const addItemAction = (type: string, addItem: boolean) => ({
  type,
  payload: addItem,
});

export default addItemAction;
