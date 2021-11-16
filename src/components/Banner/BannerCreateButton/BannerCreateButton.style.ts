import styled from "styled-components";

const CreateButton = styled.button`
  background: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  font: inherit;
  border-radius: 4px;
  outline: none;
  border: none;
  &: hover {
    background: ${(props) => props.theme.colors.lightBlue};
  }
`;

export default CreateButton;
