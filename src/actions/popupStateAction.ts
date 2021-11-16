const popupStateAction = (type: string, isOpen: boolean) => ({
  type,
  payload: isOpen,
});

export default popupStateAction;
