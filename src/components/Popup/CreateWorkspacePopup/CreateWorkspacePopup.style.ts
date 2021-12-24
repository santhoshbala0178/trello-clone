import styled from 'styled-components';

export const PopupHolder = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  overflow-x: hidden;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateWorkSpace = styled.div`
  width: 520px;
  height: 390px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.grayText};
  font-size: 16px;
  font-weight: 400;
`;

export const WorkSpaceName = styled.div`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 12px;
`;

export const TextHolder = styled.div``;

export const WorkspaceNameEditor = styled.input`
  width: 80%;
  height: 30px;
  padding: 5px;
  outline: none;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.colors.gray};
  background: ${(props) => props.theme.colors.background};

  &: hover {
    background: ${(props) => props.theme.colors.gray};
  }

  &: focus {
    background: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.bannerColor};
  }
`;

export const WorkspaceNameDescription = styled.p`
  color: ${(props) => props.theme.colors.grayText};
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0px;
`;

export const CreateWorkspaceContainer = styled.div`
  padding: 20px;
`;

export const CreateButton = styled.button`
  width: 80%;
  padding: 5px;
  height: 40px;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.bannerColor};
  font-size: 14px;
  font-weight: 600;

  &: hover {
    background: ${(props) => props.theme.colors.blue};
  }

  &: disabled {
    background: ${(props) => props.theme.colors.gray};
    cursor: default;
  }
`;

export const ErrorText = styled.div`
  color: ${(props) => props.theme.colors.red};
  height: 20px;
`;
