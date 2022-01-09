import React from 'react';
import { HomePageLink, ShowDetailsButton } from './BannerButton.style';
import { BannerButtonType } from './BannerButton.types';

const BannerButton = ({ name }: BannerButtonType) => (
  <HomePageLink to="/home/">
    <ShowDetailsButton>
      {name}
      {/*
      <IconContainer>
        <IconHolder name="downArrow" color="#FFF" size="lg" />
      </IconContainer>
      */}
    </ShowDetailsButton>
  </HomePageLink>
);

export default BannerButton;
