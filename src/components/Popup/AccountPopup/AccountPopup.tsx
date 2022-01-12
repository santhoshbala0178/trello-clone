import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { logOut } from '../../../firebase/userAuthentication';
import { ACCOUNT_POPUP } from '../../../constants/actionTypes';
import {
  AccountPopupContainer,
  AccountHeader,
  IconContainer,
  LogOut,
  AccountDetails,
  AccountDescription,
  TextHolder,
} from './AccountPopup.style';
import AccountButtonContainer from '../../Banner/AccountButton/AccountButton.style';
import IconHolder from '../../Common/IconHolder/IconHolder';
import popupStateAction from '../../../actions/popupStateAction';
import AccountPopupType from './AccountPopup.type';

const mapDispatchToProps = {
  popupStateActionProp: popupStateAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & AccountPopupType;

const AccountPopup: React.FC<Props> = ({
  popupStateActionProp,
  userName,
  userEmail,
  initials,
}) => {
  const closePopup = () => {
    popupStateActionProp(ACCOUNT_POPUP, false);
  };

  return (
    <AccountPopupContainer>
      <AccountHeader>
        Account
        <IconContainer onClick={closePopup}>
          <IconHolder name="close" color="#000" />
        </IconContainer>
      </AccountHeader>
      <AccountDetails>
        <AccountButtonContainer isInPopup>{initials}</AccountButtonContainer>
        <AccountDescription>
          <TextHolder>{userName}</TextHolder>
          <TextHolder>{userEmail}</TextHolder>
        </AccountDescription>
      </AccountDetails>
      <LogOut type="button" onClick={() => logOut()}>
        Log Out
      </LogOut>
    </AccountPopupContainer>
  );
};

export default connector(AccountPopup);
