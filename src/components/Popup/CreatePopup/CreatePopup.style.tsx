import styled from "styled-components";

export const CreatePopupContainer = styled.div`
  position: fixed;
  width: 304px;
  top: 48px;
  left: 220px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 3px;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
  z-index: 999;
  padding: 10px;
`;

export const CreateHeader = styled.div`
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
