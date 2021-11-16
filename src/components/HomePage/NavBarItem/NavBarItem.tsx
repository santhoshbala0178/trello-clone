import React from "react";
import NavBarItemContainer from "./NavBarItem.style";
import { NavBarItemType } from "./NavBarItem.types";

const NavBarItem = ({ name, isMainButton }: NavBarItemType) => (
  <NavBarItemContainer isMainButton={isMainButton}>{name}</NavBarItemContainer>
);

export default NavBarItem;
