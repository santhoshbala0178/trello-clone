import React, { useEffect, useRef, useState } from 'react';
import { TextContainer, TextArea } from './AutoTextArea.style';
import { AutoTextAreaType } from './AutoTextArea.type';

const cardPlaceholder = 'Enter a title for this card..';
const listPlaceholder = 'Enter list title..';

const AutoTextArea = ({ type }: AutoTextAreaType) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');

  useEffect(() => {
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current?.scrollHeight}px`);
  }, [text]);

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight('auto');
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setText(e.target.value);
  };

  return (
    <TextContainer height={parentHeight}>
      <TextArea
        placeholder={type === 'card' ? cardPlaceholder : listPlaceholder}
        ref={textAreaRef}
        onChange={onTextChange}
        height={textAreaHeight}
      />
    </TextContainer>
  );
};

export default AutoTextArea;
