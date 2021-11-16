import styled from "styled-components";

export const CreateNewBoard = styled.button`
  width: 15%;
  height: 100px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.gray};
  margin-bottom: 50px;
  outline: none;
  border: none;
  &: hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.1);
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const CreateBoardText = styled.div`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
