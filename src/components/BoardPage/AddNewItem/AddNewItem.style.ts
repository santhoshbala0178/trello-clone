import styled from "styled-components";
import AddNewItemType from "./AddNewItem.type";

export const TextContainer = styled.div`
  margin-top: 2px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.grayText};
`;

export const AddNewItemHolder = styled.div<AddNewItemType>`
  padding: ${(props) =>
    props.type === "list" && props.isAddList ? "10px" : "0px"};
  background: ${(props) =>
    props.type === "list" && props.isAddList
      ? props.theme.colors.lightGray
      : "none"};
`;

export const AddNewItemContainer = styled.div<AddNewItemType>`
  display: flex;
  box-sizing: border-box;
  padding: 5px 5px;
  width: 272px;
  align-items: center;
  background: ${(props) =>
    props.type === "list" ? props.theme.colors.gray : "none"};
  align-self: ${(props) => (props.type === "list" ? "flex-start" : "none")};
  border-radius: 4px;
  &: hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.gray};
  }

  &: hover ${TextContainer} {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const IconContainer = styled.div`
  margin-top: 5px;
`;
