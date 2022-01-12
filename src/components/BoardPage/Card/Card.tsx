import React from 'react';
import DeleteIcon from '../../Common/DeleteIcon/DeleteIcon';
import NameHolder from '../NameHolder';
import {
  CardContainer,
  CardEditor,
  IconContainer,
  NameContainer,
} from './Card.style';
import CardType from './Card.type';

const Card = ({ name, listName }: CardType) => {
  return (
    <CardContainer>
      <NameContainer>
        <NameHolder name={name} type="card" />
      </NameContainer>
      <CardEditor>
        <IconContainer>
          <DeleteIcon name={name} listName={listName} type="card" />
        </IconContainer>
      </CardEditor>
    </CardContainer>
  );
};

export default Card;
