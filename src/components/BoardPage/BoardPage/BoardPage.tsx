import React from "react";
import BoardStar from "../BoardStar/BoardStar";
import BoardWorkspace from "../BoardWorkspace/BoardWorkspace";
import List from "../List/List";
import {
  BoardPageContainer,
  BoardPageHeader,
  ListsContainer,
} from "./BoardPage.style";
import NameHolder from "../NameHolder/NameHolder";
import AddNewItem from "../AddNewItem/AddNewItem";

const BoardPage = () => (
  <BoardPageContainer>
    <BoardPageHeader>
      <NameHolder name="newaaaaaaaaaaaaaaaaaa" type="board" />
      <BoardStar />
      <BoardWorkspace name="first" />
    </BoardPageHeader>
    <ListsContainer>
      <List />
      <AddNewItem type="list" />
    </ListsContainer>
  </BoardPageContainer>
);

export default BoardPage;
