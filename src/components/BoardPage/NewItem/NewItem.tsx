import React, { useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { ADD_NEW_CARD, ADD_NEW_LIST } from '../../../constants/actionTypes';
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
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onClose = () => {
    if (type === 'card') {
      dispatch(addItemActionProp(ADD_NEW_CARD, !addItemReducer.addCard));
    } else {
      dispatch(addItemActionProp(ADD_NEW_LIST, !addItemReducer.addList));
    }
  };

  const addNewItem = () => {
    if (type === 'card') {
      dispatch(
        cardsModifyActionProp(ADD_NEW_CARD, {
          name: text,
        })
      );
    } else {
      dispatch(
        cardsModifyActionProp(ADD_NEW_LIST, {
          name: text,
        })
      );
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
