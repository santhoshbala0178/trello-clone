import React from "react";
import AddNewItem from "../AddNewItem/AddNewItem";
import NameHolder from "../NameHolder/NameHolder";
import ListContainer from "./List.style";

const List = () => (
  <ListContainer>
    <NameHolder name="new" type="List" />
    <AddNewItem type="card" />
  </ListContainer>
);

export default List;
