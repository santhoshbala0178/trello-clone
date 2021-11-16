import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store";
import BannerButton from "../BannerButton/BannerButton";
import BannerCreateButton from "../BannerCreateButton/BannerCreateButton";
import { BannerContainer, DetailsContainer } from "./Banner.style";
import CreateBoardPopup from "../../Popup/CreateBoardPopup/CreateBoardPopup";
import CreateWorkspacePopup from "../../Popup/CreateWorkspacePopup/CreateWorkspacePopup";

const mapStateToProps = (state: RootState) => ({
  popupStateReducer: state.popupStateReducer,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

const Banner: React.FC<Props> = ({ popupStateReducer }) => (
  <BannerContainer>
    <DetailsContainer>
      <BannerButton name="Workspaces" />
      <BannerButton name="Starred" />
      <BannerCreateButton />
    </DetailsContainer>
    {popupStateReducer.createWorkspacePopup && <CreateWorkspacePopup />}
    {popupStateReducer.createBoardPopup && <CreateBoardPopup />}
  </BannerContainer>
);

export default connector(Banner);
