import React, { useState, useEffect, useRef } from 'react';
import {
  NameHolderContainer,
  NameHolderHolder,
  NameHolderInput,
} from './NameHolder.style';
import { NameHolderType } from './NameHolder.type';

const NameHolder = ({ name, type }: NameHolderType) => {
  const [isEditing, setIsEditing] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onNameEdit = (isEdit: boolean) => {
    setIsEditing(isEdit);
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

    const handleKeyEvent = (e: any) => {
      if (e.key === 'Enter' || e.key === 'Escape') {
        onNameEdit(false);
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('keypress', handleKeyEvent);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keypress', handleKeyEvent);
    };
  }, []);

  return (
    <NameHolderContainer isEditing={isEditing} type={type} ref={ref}>
      <NameHolderHolder isEditing={isEditing} name={name} type={type}>
        {name}
      </NameHolderHolder>
      <NameHolderInput
        isEditing={isEditing}
        name={name}
        type={type}
        value={name}
        ref={inputRef}
      />
    </NameHolderContainer>
  );
};

export default NameHolder;
