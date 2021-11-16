import React from "react";
import IconHolder from "../../Common/IconHolder/IconHolder";
import { ShowDetailsButton, IconContainer } from "./BannerButton.style";
import { BannerButtonType } from "./BannerButton.types";

const BannerButton = ({ name }: BannerButtonType) => (
  <ShowDetailsButton>
    {name}
    <IconContainer>
      <IconHolder path="assets/DownArrow.svg" width={16} color="#FFF" />
    </IconContainer>
  </ShowDetailsButton>
);

export default BannerButton;
