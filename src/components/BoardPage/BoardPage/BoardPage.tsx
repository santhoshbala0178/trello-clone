/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { RootState } from '../../../store';
import StarIcon from '../../Common/StarIcon';
import BoardWorkspace from '../BoardWorkspace';
import List from '../List';
import {
  BoardPageContainer,
  BoardPageHeader,
  ListsContainer,
  DraggableListContainer,
  IconHolder,
} from './BoardPage.style';
import NameHolder from '../NameHolder/NameHolder';
import AddNewItem from '../AddNewItem/AddNewItem';
import { getBoard, updateStarredBoard } from '../../../firebase/manageData';
import cardsModifyAction from '../../../actions/cardsModifyAction';
import {
  ORDER_CARD,
  ORDER_LIST,
  SET_DATA,
} from '../../../constants/actionTypes';

const cardVals = [
  {
    name: 'to do',
    cards: [
      { id: '1', name: 'new' },
      { id: '2', name: 'cards' },
      { id: '3', name: 'Onemore' },
    ],
  },
  {
    name: 'completed',
    cards: [
      { id: '4', name: 'comp_new' },
      { id: '5', name: 'comp_cards' },
      { id: '6', name: 'comp_Onemore' },
    ],
  },
  {
    name: 'one more',
    cards: [
      { id: '7', name: 'comp_new' },
      { id: '8', name: 'comp_cards' },
      { id: '9', name: 'comp_Onemore' },
    ],
  },
];

const mapStateToProps = (state: RootState) => ({
  cardsReducer: state.cardsReducer,
});

const mapDispatchToProps = {
  cardsModifyActionProp: cardsModifyAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

const BoardPage = ({ cardsReducer, cardsModifyActionProp }: Props) => {
  const [isStarred, setIsStarred] = useState(false);
  const { workspaceName, boardName } = useParams();

  const getBoardData = async () => {
    const boardData = await getBoard(
      workspaceName || '',
      boardName || '',
      false
    );
    setIsStarred(boardData.starred);
    if (true) {
      // (boardData?.cards?.length === 0) {
      cardsModifyActionProp(SET_DATA, cardVals);
    }
  };

  useEffect(() => {
    getBoardData();
  }, []);

  const handleDragEnd = (result: any) => {
    if (!result.destination || result.reason !== 'DROP') return;

    if (result.type === 'list') {
      cardsModifyActionProp(ORDER_LIST, {
        source: result.source.index,
        destination: result.destination.index,
      });
      return;
    }

    cardsModifyActionProp(ORDER_CARD, {
      source: result.source.index,
      destination: result.destination.index,
      sourceDroppableId: result.source.droppableId,
      destinationDroppableId: result.destination.droppableId,
    });
  };

  const onIconClick = async () => {
    // Update the Starred board status
    await updateStarredBoard(workspaceName || '', boardName || '');
    setIsStarred(!isStarred);
  };

  console.log(cardsReducer);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardPageContainer>
        <BoardPageHeader>
          <NameHolder name={boardName} type="board" />
          <IconHolder onClick={onIconClick}>
            <StarIcon type="header" isClicked={isStarred} />
          </IconHolder>
          <BoardWorkspace name={workspaceName} />
        </BoardPageHeader>
        <Droppable droppableId="cards" direction="horizontal" type="list">
          {(provided) => (
            <ListsContainer
              className="cards"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cardsReducer.map((list, index) => (
                <Draggable
                  key={list.name}
                  draggableId={list.name}
                  index={index}
                >
                  {(draggableProvided) => (
                    <DraggableListContainer
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <List name={list.name} cards={list.cards} />
                    </DraggableListContainer>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <AddNewItem type="list" />
            </ListsContainer>
          )}
        </Droppable>
      </BoardPageContainer>
    </DragDropContext>
  );
};

export default connector(BoardPage);
