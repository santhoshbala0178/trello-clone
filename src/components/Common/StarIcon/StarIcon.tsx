import React, { useEffect, useState } from 'react';
import StarIconContainer from './StarIcon.style';
import IconHolder from '../IconHolder';
import StarIconType from './StarIcon.type';

const StarIcon = ({ type, isClicked }: StarIconType) => {
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
    } else {
      setName('star');
    }
  };

  useEffect(() => {
    if (isClicked) {
      console.log(isClicked, 'here');
      setName('starFilled');
      setColor('#FFFF00');
    }
  }, [isClicked]);

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
