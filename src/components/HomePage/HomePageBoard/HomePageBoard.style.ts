import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StarIconContainerType } from './HomePageBoard.type';

export const BoardPageLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HomePageBoardText = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StarIconContainer = styled.div<StarIconContainerType>`
  align-self: flex-end;
  opacity: ${(props) => (props.isClicked ? 1 : 0)};
  margin-right: ${(props) => (props.isClicked ? '15px' : '0px')};
  transition: all 0.1s;
`;

export const HomePageBoardContainer = styled.div`
  width: 15%;
  height: 100px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.gray};
  box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.1);
  transition: transform 0.45s ease, background 0.45s ease;
  margin-bottom: 50px;
  margin-right: 20px;
  &: hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.1);
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 150px;

  &: hover ${StarIconContainer} {
    opacity: 1;
    margin-right: 15px;
  }
`;
