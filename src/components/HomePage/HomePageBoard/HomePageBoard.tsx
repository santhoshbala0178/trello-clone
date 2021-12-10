import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '../../Common/StarIcon/StarIcon';
import {
  HomePageBoardContainer,
  HomePageBoardText,
  StarIconContainer,
} from './HomePageBoard.style';
import { HomePageBoardType } from './HomePageBoard.type';

const HomePageBoard = ({ name }: HomePageBoardType) => {
  const [isClicked, setIsClicked] = useState(false);

  const navigateToBoard = () => {};

  return (
    <HomePageBoardContainer onClick={navigateToBoard}>
      <Link to={`/home/${name}`}>
        <HomePageBoardText>{name}</HomePageBoardText>
        <StarIconContainer isClicked={isClicked}>
          <StarIcon type="board" setIsClicked={setIsClicked} />
        </StarIconContainer>
      </Link>
    </HomePageBoardContainer>
  );
};

export default HomePageBoard;
