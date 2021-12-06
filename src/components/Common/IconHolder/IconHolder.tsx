import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from './IconHolder.style';
import { IconHolderType } from './IconHolder.type';
import iconMap from '../../../constants/iconMap';

const IconHolder = ({ name, color, size = '1x' } : IconHolderType) => (
  <Icon>
    <FontAwesomeIcon icon={iconMap.get(name)} size={size} color={color} />
  </Icon>
);

export default IconHolder;
