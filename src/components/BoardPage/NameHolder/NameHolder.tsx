import React, { useState, useEffect, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import cardsModifyAction from '../../../actions/cardsModifyAction';
import { CARD_NAME_EDIT, LIST_NAME_EDIT } from '../../../constants/actionTypes';
import {
  NameHolderContainer,
  NameHolderHolder,
  NameHolderInput,
} from './NameHolder.style';
import { NameHolderType } from './NameHolder.type';

const mapDispatchToProps = {
  cardsModifyActionProp: cardsModifyAction,
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & NameHolderType;

const NameHolder = ({ name, listName, type, cardsModifyActionProp }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fieldValue, setFieldValue] = useState(name);
  const ref = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onNameEdit = (isEdit: boolean) => {
    if (type !== 'board') {
      // To DO: Board name edit functionality
      setIsEditing(isEdit);
    }
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!ref.current?.contains(e.target)) {
        onNameEdit(false);
      } else {
        onNameEdit(true);
        inputRef.current?.select();
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const setName = (e: any) => {
    setFieldValue(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      onNameEdit(false);
      if (type === 'card') {
        cardsModifyActionProp(CARD_NAME_EDIT, {
          name,
          listName,
        });
      } else if (type === 'list') {
        cardsModifyActionProp(LIST_NAME_EDIT, {
          name,
          listName,
        });
      }
    }
  };

  return (
    <NameHolderContainer isEditing={isEditing} type={type} ref={ref}>
      <NameHolderHolder isEditing={isEditing} name={fieldValue} type={type}>
        {fieldValue}
      </NameHolderHolder>
      <NameHolderInput
        onKeyPress={handleKeyPress}
        isEditing={isEditing}
        name={fieldValue}
        type={type}
        value={fieldValue}
        ref={inputRef}
        onChange={setName}
      />
    </NameHolderContainer>
  );
};

export default connector(NameHolder);
