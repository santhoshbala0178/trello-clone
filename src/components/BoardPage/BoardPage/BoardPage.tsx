/* eslint-disable react/jsx-props-no-spreading */
import React, { useReducer } from 'react';
import { useParams } from 'react-router';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import cardsOrderReducer from '../../../reducers/cardsOrderReducer';
import StarIcon from '../../Common/StarIcon';
import BoardWorkspace from '../BoardWorkspace';
import List from '../List';
import {
  BoardPageContainer,
  BoardPageHeader,
  ListsContainer,
  DraggableListContainer,
} from './BoardPage.style';
import NameHolder from '../NameHolder/NameHolder';
import AddNewItem from '../AddNewItem/AddNewItem';

const cardVals = [
  {
    cardName: 'to do',
    cards: [
      { id: '1', name: 'new' },
      { id: '2', name: 'cards' },
      { id: '3', name: 'Onemore' },
    ],
  },
  {
    cardName: 'completed',
    cards: [
      { id: '4', name: 'comp_new' },
      { id: '5', name: 'comp_cards' },
      { id: '6', name: 'comp_Onemore' },
    ],
  },
  {
    cardName: 'one more',
    cards: [
      { id: '7', name: 'comp_new' },
      { id: '8', name: 'comp_cards' },
      { id: '9', name: 'comp_Onemore' },
    ],
  },
];

const BoardPage = () => {
  const [cardsList, dispatch] = useReducer(cardsOrderReducer, cardVals);
  const { boardName } = useParams();

  const handleDragEnd = (result: any) => {
    if (!result.destination || result.reason !== 'DROP') return;

    if (result.type === 'list') {
      dispatch({
        type: 'LIST',
        source: result.source.index,
        destination: result.destination.index,
      });
      return;
    }

    dispatch({
      type: 'CARD',
      source: result.source.index,
      destination: result.destination.index,
      sourceDroppableId: result.source.droppableId,
      destinationDroppableId: result.destination.droppableId,
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardPageContainer>
        <BoardPageHeader>
          <NameHolder name={boardName} type="board" />
          <StarIcon type="header" />
          <BoardWorkspace name="first" />
        </BoardPageHeader>
        <Droppable droppableId="cards" direction="horizontal" type="list">
          {(provided) => (
            <ListsContainer
              className="cards"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cardsList.map((cards, index) => (
                <Draggable
                  key={cards.cardName}
                  draggableId={cards.cardName}
                  index={index}
                >
                  {(draggableProvided) => (
                    <DraggableListContainer
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <List name={cards.cardName} cards={cards.cards} />
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

export default BoardPage;
