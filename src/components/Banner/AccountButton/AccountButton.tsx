import React, { useEffect, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ACCOUNT_POPUP } from '../../../constants/actionTypes';
import { RootState } from '../../../store';
import { AccountButtonType } from './AccountButton.type';
import AccountButtonContainer from './AccountButton.style';
import popupStateAction from '../../../actions/popupStateAction';

const mapStateToProps = (state: RootState) => ({
  popupStateReducer: state.popupStateReducer,
});

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & AccountButtonType;

const AccountButton: React.FC<Props> = ({
  popupStateReducer,
  popupStateActionProp,
  initials,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    popupStateActionProp(ACCOUNT_POPUP, !popupStateReducer.accountPopup);
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        popupStateActionProp(ACCOUNT_POPUP, false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div ref={modalRef}>
      <AccountButtonContainer isInPopup={false} onClick={onClick}>
        {initials}
      </AccountButtonContainer>
    </div>
  );
};

export default connector(AccountButton);
