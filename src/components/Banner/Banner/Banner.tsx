import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store';
import BannerType from './Banner.type';
import BannerButton from '../BannerButton/BannerButton';
import BannerCreateButton from '../BannerCreateButton/BannerCreateButton';
import { BannerContainer, DetailsContainer } from './Banner.style';
import CreateBoardPopup from '../../Popup/CreateBoardPopup/CreateBoardPopup';
import CreateWorkspacePopup from '../../Popup/CreateWorkspacePopup/CreateWorkspacePopup';
import AccountButton from '../AccountButton/AccountButton';
import AccountPopup from '../../Popup/AccountPopup/AccountPopup';

const mapStateToProps = (state: RootState) => ({
  popupStateReducer: state.popupStateReducer,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & BannerType;

const Banner: React.FC<Props> = ({ popupStateReducer, userName, userEmail }) => {
  const getInitials = () => {
    const nameSplits = userName.split(' ');
    const initials = nameSplits.reduce((prevVal, name) => `${prevVal}${name.charAt(0)}`, '');

    return initials.toUpperCase();
  };

  return (
    <BannerContainer>
      <DetailsContainer>
        <BannerButton name="Workspaces" />
        <BannerButton name="Starred" />
        <BannerCreateButton />
      </DetailsContainer>
      <AccountButton initials={getInitials()} />
      {popupStateReducer.createWorkspacePopup && <CreateWorkspacePopup />}
      {popupStateReducer.createBoardPopup && <CreateBoardPopup />}
      {popupStateReducer.accountPopup
        && <AccountPopup userName={userName} userEmail={userEmail} initials={getInitials()} />}
    </BannerContainer>
  );
};

export default connector(Banner);
