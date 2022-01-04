import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  ADD_NEW_CARD,
  ADD_NEW_CARD_ITEM,
  ADD_NEW_LIST,
  ADD_NEW_LIST_ITEM,
} from '../../../constants/actionTypes';
import { RootState } from '../../../store';
import addItemAction from '../../../actions/addItemAction';
import cardsModifyAction from '../../../actions/cardsModifyAction';
import IconHolder from '../../Common/IconHolder';
import AutoTextArea from '../AutoTextArea';
import NewItemType from './NewItem.type';
import {
  ButtonContainer,
  NewItemContainer,
  IconContainer,
  AddButton,
} from './NewItem.style';

const mapStateToProps = (state: RootState) => ({
  addItemReducer: state.addItemReducer,
});

const mapDispatchToProps = {
  addItemActionProp: addItemAction,
  cardsModifyActionProp: cardsModifyAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & NewItemType;

const NewItem = ({
  type,
  addItemReducer,
  addItemActionProp,
  cardsModifyActionProp,
}: Props) => {
  const [text, setText] = useState('');

  const onClose = () => {
    if (type === 'card') {
      addItemActionProp(ADD_NEW_CARD, !addItemReducer.addCard);
    } else {
      addItemActionProp(ADD_NEW_LIST, !addItemReducer.addList);
    }
  };

  const addNewItem = () => {
    if (type === 'card') {
      cardsModifyActionProp(ADD_NEW_CARD_ITEM, {
        name: text,
        listName: addItemReducer.listName,
      });
      addItemActionProp(ADD_NEW_CARD, !addItemReducer.addCard);
    } else {
      cardsModifyActionProp(ADD_NEW_LIST_ITEM, {
        name: text,
      });
      addItemActionProp(ADD_NEW_LIST, !addItemReducer.addList);
    }
  };

  return (
    <NewItemContainer>
      <AutoTextArea type={type} text={text} setText={setText} />
      <ButtonContainer>
        <AddButton onClick={addNewItem}>{`Add ${type}`}</AddButton>
        <IconContainer onClick={onClose}>
          <IconHolder name="close" color="#000" />
        </IconContainer>
      </ButtonContainer>
    </NewItemContainer>
  );
};

export default connector(NewItem);
