import React, { useState } from 'react';
import StarIcon from '../../Common/StarIcon';
import {
  BoardPageLink,
  HomePageBoardContainer,
  HomePageBoardText,
  StarIconContainer,
} from './HomePageBoard.style';
import { HomePageBoardType } from './HomePageBoard.type';

const HomePageBoard = ({ name }: HomePageBoardType) => {
  const [isClicked, setIsClicked] = useState(false);

  const onIconClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <HomePageBoardContainer>
      <BoardPageLink to={`/home/${name}`}>
        <HomePageBoardText>{name}</HomePageBoardText>
        <StarIconContainer isClicked={isClicked} onClick={onIconClick}>
          <StarIcon type="board" setIsClicked={setIsClicked} />
        </StarIconContainer>
      </BoardPageLink>
    </HomePageBoardContainer>
  );
};

export default HomePageBoard;
