import styled from 'styled-components';
import { NameHolderType } from './NameHolder.type';

const assignWidth = (props: NameHolderType) => {
  switch (props.type) {
    case 'board':
      return props.name ? `${props.name.length * 9 + 20}px` : '20px';
    default:
      return '100%';
  }
};

export const NameHolderContainer = styled.div<NameHolderType>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: ${(props) =>
    props.type === 'board' ? props.theme.colors.gray : 'none'};
  vertical-align: middle;
  &: hover {
    cursor: pointer;
  }
`;

export const NameHolderHolder = styled.div<NameHolderType>`
  display: ${(props) => (props.isEditing ? 'none' : 'block')};
  width: ${(props) => assignWidth(props)};
  min-width: 40px;
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => (props.type !== 'card' ? '600' : '400')};
  padding: 5px;
  box-sizing: border-box;
`;

export const NameHolderInput = styled.input<NameHolderType>`
  display: ${(props) => (props.isEditing ? 'block' : 'none')};
  width: ${(props) => assignWidth(props)};
  min-width: 40px;
  min-height: 28px;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  border: solid 2px #0079bf;
  border-radius: 4px;
  font-weight: ${(props) => (props.type !== 'card' ? '600' : '400')};
  font-size: 14px;
`;
