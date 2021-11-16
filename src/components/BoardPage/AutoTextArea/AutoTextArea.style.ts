import styled from "styled-components";
import { StyledType } from "./AutoTextArea.type";

export const TextContainer = styled.div<StyledType>`
  min-height: ${(props) => props.height};
  width: 100%;
  margin-bottom: 5px;
`;

export const TextArea = styled.textarea<StyledType>`
  height: ${(props) => props.height};
  overflow-wrap: break-word;
  overflow: hidden;
  border: none;
  outline: none;
  border-radius: 4px;
  resize: none;
  width: 100%;
  box-shadow: 0 1px 0 #091e4240;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif !important;
  font-size: 14px;
  padding: 10px 5px;
  box-sizing: border-box;
`;
