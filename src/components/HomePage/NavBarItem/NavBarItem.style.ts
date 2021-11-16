import styled from "styled-components";
import { NavBarItemContainerType } from "./NavBarItem.types";

const NavBarItemContainer = styled.div<NavBarItemContainerType>`
  width: ${(props) => (props.isMainButton ? "100%" : "none")};
  padding: 5px 10px;
  border-radius: 4px;
  padding-left: ${(props) => (props.isMainButton ? "10px" : "20px")};
  font-weight: ${(props) => (props.isMainButton ? "inerit" : "400")};
  font-size: ${(props) => (props.isMainButton ? "inerit" : "14px")};
  color: ${(props) => props.theme.colors.darkBlue};
  &: hover {
    background: ${(props) => props.theme.colors.gray};
    cursor: pointer;
  }
`;

export default NavBarItemContainer;
