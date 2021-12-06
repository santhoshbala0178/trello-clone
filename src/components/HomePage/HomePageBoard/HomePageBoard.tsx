import React, { useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { NAVIGATE_TO_BOARD } from '../../../constants/actionTypes';
import StarIcon from '../../Common/StarIcon/StarIcon';
import {
  HomePageBoardContainer,
  HomePageBoardText,
  StarIconContainer,
} from './HomePageBoard.style';
import { HomePageBoardType } from './HomePageBoard.type';
import pageNavigateAction from '../../../actions/pageNavigateAction';

const mapDispatchToProps = {
  pageNavigateActionProp: pageNavigateAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & HomePageBoardType;

const HomePageBoard = ({ name, pageNavigateActionProp }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const navigateToBoard = () => {
    dispatch(
      pageNavigateActionProp(
        NAVIGATE_TO_BOARD,
        name,
      ),
    );
  };

  return (
    <HomePageBoardContainer onClick={navigateToBoard}>
      <HomePageBoardText>{name}</HomePageBoardText>
      <StarIconContainer isClicked={isClicked}>
        <StarIcon type="board" setIsClicked={setIsClicked} />
      </StarIconContainer>
    </HomePageBoardContainer>
  );
};

export default connector(HomePageBoard);
