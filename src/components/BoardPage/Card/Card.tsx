import React from 'react';
import IconHolder from '../../Common/IconHolder/IconHolder';
import NameHolder from '../NameHolder/NameHolder';
import {
  CardContainer, CardEditor, IconContainer, NameContainer,
} from './Card.style';
import CardType from './Card.type';

const Card = ({ name } : CardType) => (
  <CardContainer>
    <NameContainer>
      <NameHolder name={name} type="card" />
    </NameContainer>
    <CardEditor>
      <IconContainer>
        <IconHolder name="delete" color="#5e6c84" />
      </IconContainer>
    </CardEditor>
  </CardContainer>
);

export default Card;
