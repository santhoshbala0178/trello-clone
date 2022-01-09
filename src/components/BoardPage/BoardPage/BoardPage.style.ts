import styled from 'styled-components';

export const BoardPageContainer = styled.div`
  margin: 20px;
`;

export const BoardPageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SaveChanges = styled.button`
  align-items: center;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.lightBlue};
  color: ${(props) => props.theme.colors.white};
  padding: 5px 10px;
  outline: none;
  border: none;
  font-weight: 600;
  &: hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.blue};
  }
`;

export const ListsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-basis: 20%;
`;

export const DraggableListContainer = styled.div`
  margin-right: 15px;
`;

export const IconHolder = styled.div``;
