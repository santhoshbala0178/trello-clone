import styled from 'styled-components';

export const IconContainer = styled.div`
    visibility: hidden;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 272px;
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: 4px;
  padding: 10px;
  &: hover {
    cursor: pointer;
  }

  &: hover ${IconContainer} {
    visibility: visible;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NameContainer = styled.div`
  width: 90%;
`;

export const CardList = styled.ul`
  padding: 0px;
  list-style-type: none;
`;

export const CardContainer = styled.li`
  margin-bottom: 10px;
`;
