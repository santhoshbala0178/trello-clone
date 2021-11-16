import React from "react";
import {
  HomePageHeaderContainer,
  HomePageHeaderText,
} from "./HomePageHeader.style";
import IconHolder from "../../Common/IconHolder/IconHolder";
import HomePageHeaderType from "./HomePageHeader.type";

const HomePageHeader = ({ iconPath, text }: HomePageHeaderType) => (
  <HomePageHeaderContainer>
    <IconHolder path={iconPath} width={20} color="#5e6c84" />
    <HomePageHeaderText>{text}</HomePageHeaderText>
  </HomePageHeaderContainer>
);

export default HomePageHeader;
