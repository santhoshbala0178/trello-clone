import styled from 'styled-components';
import { WorspaceIconType } from './HomePageWorkspace.type';
import gradient from '../../../constants/colorGradients';

export const WorkspaceContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const WorkspaceIcon = styled.div<WorspaceIconType>`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: ${(props) => gradient[props.code % gradient.length]};
`;

export const LetterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

export const WorkspaceName = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 6px;
  margin-left: 5px;
  color: ${(props) => props.theme.colors.darkBlue};
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`;
