import React from "react";
import SVG from "react-inlinesvg";
import { Icon } from "./IconHolder.style";
import { IconHolderType } from "./IconHolder.type";

const IconHolder = ({ path, width, color }: IconHolderType) => (
  <Icon>
    <SVG src={path} width={width} fill={color} />
  </Icon>
);
export default IconHolder;
