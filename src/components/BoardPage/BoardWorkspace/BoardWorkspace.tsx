import React, { useEffect, useRef } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { CHANGE_WORKSPACE } from '../../../constants/actionTypes';
import { RootState } from '../../../store';
import {
  BoardWorkspaceContainer,
  WorkspaceNameHolder,
} from './BoardWorkspace.style';
import BoardWorkspaceType from './BoardWorkspace.type';
import popupStateAction from '../../../actions/popupStateAction';
import ChangeWorkspacePopup from '../../Popup/ChangeWorkspacePopup';

const mapStateToProps = (state: RootState) => ({
  popupStateReducer: state.popupStateReducer,
});

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & BoardWorkspaceType;

const BoardWorkspace = ({
  name,
  popupStateReducer,
  popupStateActionProp,
}: Props) => {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    dispatch(
      popupStateActionProp(CHANGE_WORKSPACE, !popupStateReducer.changeWorkspace)
    );
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        dispatch(popupStateActionProp(CHANGE_WORKSPACE, false));
      }
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, []);

  const getCurrentPosition = () => modalRef.current?.getBoundingClientRect();

  return (
    <div ref={modalRef}>
      <BoardWorkspaceContainer onClick={onClick}>
        <WorkspaceNameHolder>{name}</WorkspaceNameHolder>
      </BoardWorkspaceContainer>
      {popupStateReducer.changeWorkspace && (
        <ChangeWorkspacePopup position={getCurrentPosition()?.left} />
      )}
    </div>
  );
};

export default connector(BoardWorkspace);
