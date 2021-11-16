import styled from "styled-components";

export const WorkspaceContainer = styled.div``;

export const WorkspaceName = styled.div`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;
