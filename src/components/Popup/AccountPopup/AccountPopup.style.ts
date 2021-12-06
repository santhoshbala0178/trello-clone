import styled from 'styled-components';

export const AccountPopupContainer = styled.div`
  position: fixed;
  width: 304px;
  top: 48px;
  right: 20px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 3px;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
  z-index: 999;
  padding: 10px;
`;

export const AccountHeader = styled.div`
  text-align: center;
  padding: 5px 0px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  color: ${(props) => props.theme.colors.grayText};
  display: flex;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const AccountDetails = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  padding: 10px 0px;
  margin-bottom: 10px;
`;

export const AccountDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextHolder = styled.div`
  color: ${(props) => props.theme.colors.grayText};
`;

export const LogOut = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.grayText};
  border-radius: 0;
  box-shadow: none;
  display: block;
  height: 100%;
  padding: 6px 0px;
  text-align: left;
  text-decoration: none;
  width: 100%;
  transition: none;
  margin: 0;
  outline: 0;

  &: hover {
    background: ${(props) => props.theme.colors.gray};
  }
`;
