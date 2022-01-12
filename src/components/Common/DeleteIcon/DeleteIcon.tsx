import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import cardsModifyAction from '../../../actions/cardsModifyAction';
import { CARD_DELETE, LIST_DELETE } from '../../../constants/actionTypes';
import IconHolder from '../IconHolder';
import DeleteIconType from './DeleteIcon.type';

const mapDispatchToProps = {
  cardsModifyActionProp: cardsModifyAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & DeleteIconType;

const DeleteIcon = ({ name, listName, type, cardsModifyActionProp }: Props) => {
  const handleDelete = () => {
    if (type === 'card') {
      cardsModifyActionProp(CARD_DELETE, {
        name,
        listName,
      });
    } else {
      cardsModifyActionProp(LIST_DELETE, {
        name,
      });
    }
  };

  return (
    <div
      onClick={handleDelete}
      onKeyDown={handleDelete}
      role="button"
      tabIndex={0}
    >
      <IconHolder name="delete" color="#5e6c84" />
    </div>
  );
};

export default connector(DeleteIcon);
