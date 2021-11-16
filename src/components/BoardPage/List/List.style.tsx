import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 272px;
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: 4px;
  padding: 10px;
  &: hover {
    cursor: pointer;
  }
`;

export default ListContainer;
