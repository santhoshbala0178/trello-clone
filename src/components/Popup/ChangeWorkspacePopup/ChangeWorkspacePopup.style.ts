import styled from "styled-components";
import ChangeWorkspacePopupType from "./ChangeWorkspacePopup.type";

export const ChangeWorkspacePopupContainer = styled.div<ChangeWorkspacePopupType>`
  position: fixed;
  width: 250px;
  top: 110px;
  left: ${(props) => `${props.position}px`};
  background: ${(props) => props.theme.colors.white};
  border-radius: 3px;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
  z-index: 999;
  padding: 10px;
`;

export const ChangeHeader = styled.div`
  text-align: center;
  padding: 5px 0px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayText};
  color: ${(props) => props.theme.colors.grayText};
  display: flex;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const ChangeContent = styled.div`
  margin: 10px 0px;
`;

export const Description = styled.div`
  color: ${(props) => props.theme.colors.grayText};
  font-size: 12px;
  font-weight: 600;
`;

export const WorkspaceDropdown = styled.select`
  width: 100%;
`;

export const ChangeButton = styled.button`
  margin-top: 15px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.bannerColor};
  font-size: 14px;
  font-weight: 600;

  &: hover {
    background: ${(props) => props.theme.colors.blue};
  }
`;
