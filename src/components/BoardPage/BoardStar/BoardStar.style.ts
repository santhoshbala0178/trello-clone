import styled from "styled-components";

const BoardStarContainer = styled.div`
  padding: 5px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.gray};
  text-align: center;
  &: hover {
    cursor: pointer;
  }
`;

export default BoardStarContainer;
