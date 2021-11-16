import styled from "styled-components";

export const CreatePopupButtonContainer = styled.button`
  margin: 5px 0px;
  border: none;
  outline: none;
  background: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;

  &: hover {
    background: ${(props) => props.theme.colors.gray};
    border-radius: 4px;
  }
`;

export const Header = styled.div`
  text-align: left;
  padding: 5px;
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 14px;
`;

export const Description = styled.div`
  text-align: left;
  margin: 1px;
  padding: 5px;
  color: ${(props) => props.theme.colors.grayText};
`;
