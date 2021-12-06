import React from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { CREATE_WORKSPACE_POPUP } from '../../../constants/actionTypes';
import { RootState } from '../../../store';
import {
  AddWorkSpaceButton,
  WorkSpaceHeaderContainer,
  WorkspaceText,
} from './WorkspaceHeader.style';
import IconHolder from '../../Common/IconHolder/IconHolder';
import popupStateAction from '../../../actions/popupStateAction';

const mapStateToProps = (state: RootState) => ({
  popupStateReducer: state.popupStateReducer,
});

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const WorkspaceHeader: React.FC<Props> = ({
  popupStateReducer,
  popupStateActionProp,
}) => {
  const dispatch = useDispatch();

  const onAddWorkspace = () => {
    dispatch(
      popupStateActionProp(
        CREATE_WORKSPACE_POPUP,
        !popupStateReducer.createWorkspacePopup,
      ),
    );
  };

  return (
    <>
      <WorkSpaceHeaderContainer>
        <WorkspaceText>Workspaces</WorkspaceText>
        <AddWorkSpaceButton onClick={onAddWorkspace}>
          <IconHolder name="plus" color="#5e6c84" />
        </AddWorkSpaceButton>
      </WorkSpaceHeaderContainer>
    </>
  );
};

export default connector(WorkspaceHeader);
