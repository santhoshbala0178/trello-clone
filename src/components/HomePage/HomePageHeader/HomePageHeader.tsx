import React from 'react';
import { HomePageHeaderContainer, HomePageHeaderText } from './HomePageHeader.style';
import IconHolder from '../../Common/IconHolder/IconHolder';
import HomePageHeaderType from './HomePageHeader.type';

const HomePageHeader = ({ iconPath, text } : HomePageHeaderType) => (
  <HomePageHeaderContainer>
    <IconHolder
      name={iconPath}
      color="#5e6c84"
      size="lg"
    />
    <HomePageHeaderText>
      { text }
    </HomePageHeaderText>
  </HomePageHeaderContainer>
);

export default HomePageHeader;
