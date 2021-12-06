const pageNavigateAction = (type: string, boardName: string) => ({
  type,
  payload: boardName,
});

export default pageNavigateAction;
