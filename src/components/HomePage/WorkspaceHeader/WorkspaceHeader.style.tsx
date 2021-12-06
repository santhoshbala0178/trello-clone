import styled from 'styled-components';

export const WorkSpaceHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 10px;
  align-items: center;
`;

export const WorkspaceText = styled.span`
  color: ${(props) => props.theme.colors.grayText};
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
`;

export const AddWorkSpaceButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 4px;
  border-radius: 4px;

  &: hover {
    background: ${(props) => props.theme.colors.gray};
  }
`;
