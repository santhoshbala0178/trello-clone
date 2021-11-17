import styled from "styled-components";

export const HomePageBoardText = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HomePageBoardContainer = styled.div`
  width: 15%;
  height: 100px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.gray};
  box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.1);
  transition: transform 0.45s ease, background 0.45s ease;
  margin-bottom: 50px;
  &: hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.1);
    cursor: pointer;
    background: linear-gradient(to right, #3d6cb9, #00fff0);
    transform: scale(1.02);
  }

  &: hover ${HomePageBoardText} {
    color: white;
  }
`;