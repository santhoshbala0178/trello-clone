import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ADD_NEW_CARD, ADD_NEW_LIST } from '../../../constants/actionTypes';
import { RootState } from '../../../store';
import {
  AddNewItemContainer,
  TextContainer,
  IconContainer,
  AddNewItemHolder,
} from './AddNewItem.style';
import AddNewItemType from './AddNewItem.type';
import IconHolder from '../../Common/IconHolder';
import NewItem from '../NewItem';
import addItemAction from '../../../actions/addItemAction';

const addCard = 'Add a card';
const addList = 'Add another list';

const mapStateToProps = (state: RootState) => ({
  addItemReducer: state.addItemReducer,
});

const mapDispatchToProps = {
  addItemActionProp: addItemAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & AddNewItemType;

const AddNewItem = ({
  name,
  type,
  addItemReducer,
  addItemActionProp,
}: Props) => {
  const onClick = (e: any) => {
    if (type === 'card') {
      if (e.target.dataset.name) {
        addItemActionProp(ADD_NEW_CARD, true, e.target.dataset.name);
      } else {
        addItemActionProp(ADD_NEW_CARD, true, e.target.parentNode.dataset.name);
      }
    } else {
      addItemActionProp(ADD_NEW_LIST, !addItemReducer.addList);
    }
  };

  return (
    <AddNewItemHolder isAddList={addItemReducer.addList} type={type}>
      {((type === 'card' &&
        (!addItemReducer.addCard || addItemReducer.listName !== name)) ||
        (type === 'list' && !addItemReducer.addList)) && (
        <AddNewItemContainer data-name={name} type={type} onClick={onClick}>
          <IconContainer>
            <IconHolder name="plus" color="#5e6c84" />
          </IconContainer>
          <TextContainer>{type === 'card' ? addCard : addList}</TextContainer>
        </AddNewItemContainer>
      )}
      {((type === 'card' &&
        addItemReducer.addCard &&
        addItemReducer.listName === name) ||
        (type === 'list' && addItemReducer.addList)) && <NewItem type={type} />}
    </AddNewItemHolder>
  );
};

export default connector(AddNewItem);
