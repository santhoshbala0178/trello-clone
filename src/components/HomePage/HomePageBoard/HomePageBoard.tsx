import React from 'react';
import { updateStarredBoard } from '../../../firebase/manageData';
import StarIcon from '../../Common/StarIcon';
import {
  BoardPageLink,
  HomePageBoardContainer,
  HomePageBoardText,
  StarIconContainer,
} from './HomePageBoard.style';
import { HomePageBoardType } from './HomePageBoard.type';

const HomePageBoard = ({ workspaceName, board }: HomePageBoardType) => {
  const onIconClick = async (e: any) => {
    e.preventDefault();
    // Update the Starred board status
    await updateStarredBoard(workspaceName, board.name);
  };

  return (
    <HomePageBoardContainer data-testid="home-page-board">
      <BoardPageLink to={`/home/${workspaceName}/${board?.name}`}>
        <HomePageBoardText>{board?.name}</HomePageBoardText>
        <StarIconContainer
          data-testid="star-icon-container"
          isClicked={board?.starred}
          onClick={onIconClick}
        >
          <StarIcon type="board" isClicked={board?.starred} />
        </StarIconContainer>
      </BoardPageLink>
    </HomePageBoardContainer>
  );
};

export default HomePageBoard;
