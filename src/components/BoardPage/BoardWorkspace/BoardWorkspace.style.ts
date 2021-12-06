import styled from 'styled-components';

export const BoardWorkspaceContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.gray};
  vertical-align: middle;
  padding: 5px 10px;
  &: hover {
    cursor: pointer;
  }
`;

export const WorkspaceNameHolder = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  box-sizing: border-box;
`;
