/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import AddNewItem from '../AddNewItem';
import Card from '../Card';
import NameHolder from '../NameHolder';
import IconHolder from '../../Common/IconHolder';
import {
  ListContainer,
  CardList,
  CardContainer,
  HeaderContainer,
  NameContainer,
  IconContainer,
} from './List.style';
import { CardListType } from '../BoardPage/BoardPage.type';

const List = ({ name, cards }: CardListType) => (
  <Droppable droppableId={name} type="card">
    {(provided) => (
      <ListContainer>
        <HeaderContainer>
          <NameContainer>
            <NameHolder name={name} type="List" />
          </NameContainer>
          <IconContainer>
            <IconHolder name="delete" color="#5e6c84" />
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
                  <Card name={card.name} />
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
