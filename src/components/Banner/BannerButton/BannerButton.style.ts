import styled from 'styled-components';

export const ShowDetailsButton = styled.button`
  background: none;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.white};
  font: inherit;
  display: flex;
  align-items: center;
  &: hover {
    background: ${(props) => props.theme.colors.lightBlue};
    border-radius: 4px;
  }
`;

export const IconContainer = styled.span`
  margin-left: 5px;
  padding: 5px 0px;
`;
