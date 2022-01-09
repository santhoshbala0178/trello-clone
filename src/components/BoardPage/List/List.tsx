/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import AddNewItem from '../AddNewItem';
import Card from '../Card';
import NameHolder from '../NameHolder';
import {
  ListContainer,
  CardList,
  CardContainer,
  HeaderContainer,
  NameContainer,
  IconContainer,
} from './List.style';
import { CardListType } from '../BoardPage/BoardPage.type';
import DeleteIcon from '../../Common/DeleteIcon/DeleteIcon';

const List = ({ name, cards }: CardListType) => (
  <Droppable droppableId={name} type="card">
    {(provided) => (
      <ListContainer>
        <HeaderContainer>
          <NameContainer>
            <NameHolder name={name} type="list" />
          </NameContainer>
          <IconContainer>
            <DeleteIcon name={name} type="list" />
          </IconContainer>
        </HeaderContainer>
        <CardList
          className={name}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {cards.map((card, index) => (
            <Draggable key={card.id} draggableId={card.id} index={index}>
              {(draggableProvided) => (
                <CardContainer
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.draggableProps}
                  {...draggableProvided.dragHandleProps}
                >
                  <Card name={card.name} listName={name} />
                </CardContainer>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </CardList>
        <AddNewItem name={name} type="card" />
      </ListContainer>
    )}
  </Droppable>
);
export default List;
