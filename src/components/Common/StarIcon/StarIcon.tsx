import React, { useState } from 'react';
import StarIconContainer from './StarIcon.style';
import IconHolder from '../IconHolder';
import StarIconType from './StarIcon.type';

const StarIcon = ({ type, setIsClicked }: StarIconType) => {
  const [name, setName] = useState('star');
  const [color, setColor] = useState('#000');

  const onHover = (e: any) => {
    if (name === 'star') {
      if (e.type === 'mouseenter') {
        setColor('#FFFF00');
      } else {
        setColor('#000');
      }
    }
  };

  const onClick = () => {
    if (name === 'star') {
      setName('starFilled');
      if (setIsClicked !== undefined) setIsClicked(true);
    } else {
      setName('star');
      if (setIsClicked !== undefined) setIsClicked(false);
    }
  };

  return (
    <StarIconContainer
      type={type}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      onClick={onClick}
    >
      <IconHolder name={name} color={color} />
    </StarIconContainer>
  );
};

export default StarIcon;
