import styled from 'styled-components';
import StarIconType from './StarIcon.type';

const StarIconContainer = styled.div < StarIconType > `
  padding: 5px;
  border-radius: 4px;
  background: ${(props) => (props.type !== 'board' ? props.theme.colors.gray : 'none')};
  text-align: center;
  &: hover {
    cursor: pointer;
  }
`;

export default StarIconContainer;
