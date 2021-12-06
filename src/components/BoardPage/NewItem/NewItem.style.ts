import styled from 'styled-components';

export const NewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0px;
  width: 272px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  margin-left: 5px;
`;

export const AddButton = styled.button`
  padding: 5px 10px;
  background: ${(props) => props.theme.colors.blueButton};
  border-radius: 4px;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 400;
  transition: background 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif !important;
`;
