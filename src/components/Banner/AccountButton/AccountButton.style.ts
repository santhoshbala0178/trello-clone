import styled from 'styled-components';
import { ButtonType } from './AccountButton.type';

const AccountButtonContainer = styled.button < ButtonType > `
  border-radius: 50%;
  height: ${(props) => (props.isInPopup ? '40px' : '30px')};
  width: ${(props) => (props.isInPopup ? '45px' : '35px')};
  background: #DFE1E6;
  margin-right: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #172B4D;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;

  &: hover {
    cursor: pointer;
  }
`;

export default AccountButtonContainer;
