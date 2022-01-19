import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePageLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
`;

export const ShowDetailsButton = styled.button`
  background: none;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.white};
  font: inherit;
  display: flex;
  align-items: center;
  padding: 5px;

  &: hover {
    background: ${(props) => props.theme.colors.lightBlue};
    border-radius: 4px;
  }
`;

export const IconContainer = styled.span`
  margin-left: 5px;
  padding: 5px 0px;
`;
