import styled from "styled-components";

const WorkSpaceButtonContainer = styled.div`
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.darkBlue};
  &: hover {
    background: ${(props) => props.theme.colors.gray};
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default WorkSpaceButtonContainer;
