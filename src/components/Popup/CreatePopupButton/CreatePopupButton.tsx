import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  CREATE_POPUP,
  CREATE_BOARD_POPUP,
  CREATE_WORKSPACE_POPUP,
} from '../../../constants/actionTypes';
import { RootState } from '../../../store';
import {
  CreatePopupButtonContainer,
  Description,
  Header,
} from './CreatePopupButton.style';
import CreatePopupButtonType from './CreatePopupButton.type';
import popupStateAction from '../../../actions/popupStateAction';

const mapStateToProps = (state: RootState) => ({
  popupStateReducer: state.popupStateReducer,
});

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & CreatePopupButtonType;

const CreatePopupButton = ({
  header,
  description,
  popupStateReducer,
  popupStateActionProp,
}: Props) => {
  const handleButtonClick = () => {
    if (header === 'Create Workspace') {
      popupStateActionProp(
        CREATE_WORKSPACE_POPUP,
        !popupStateReducer.createWorkspacePopup
      );
      popupStateActionProp(CREATE_POPUP, !popupStateReducer.createPopup);
    } else {
      popupStateActionProp(
        CREATE_BOARD_POPUP,
        !popupStateReducer.createBoardPopup
      );
      popupStateActionProp(CREATE_POPUP, !popupStateReducer.createPopup);
    }
  };

  return (
    <CreatePopupButtonContainer onClick={handleButtonClick}>
      <Header>{header}</Header>
      <Description>{description}</Description>
    </CreatePopupButtonContainer>
  );
};

export default connector(CreatePopupButton);
