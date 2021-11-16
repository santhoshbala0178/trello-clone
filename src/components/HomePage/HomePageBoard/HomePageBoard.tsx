import React from "react";
import {
  HomePageBoardContainer,
  HomePageBoardText,
} from "./HomePageBoard.style";
import HomePageBoardType from "./HomePageBoard.type";

const HomePageBoard = ({ name }: HomePageBoardType) => (
  <HomePageBoardContainer>
    <HomePageBoardText>{name}</HomePageBoardText>
  </HomePageBoardContainer>
);

export default HomePageBoard;
