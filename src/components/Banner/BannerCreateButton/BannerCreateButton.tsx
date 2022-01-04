import React, { useEffect, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { CREATE_POPUP } from '../../../constants/actionTypes';
import { RootState } from '../../../store';
import CreateButton from './BannerCreateButton.style';
import popupStateAction from '../../../actions/popupStateAction';
import CreatePopup from '../../Popup/CreatePopup';

const mapStateToProps = (state: RootState) => ({
  popupStateReducer: state.popupStateReducer,
});

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const BannerCreateButton: React.FC<Props> = ({
  popupStateReducer,
  popupStateActionProp,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const onCreate = () => {
    popupStateActionProp(CREATE_POPUP, !popupStateReducer.createPopup);
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        popupStateActionProp(CREATE_POPUP, false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div ref={modalRef}>
      <CreateButton onClick={onCreate}>Create</CreateButton>
      {popupStateReducer.createPopup && <CreatePopup />}
    </div>
  );
};

export default connector(BannerCreateButton);
