import styled from 'styled-components';

export const HomePageHeaderContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  align-items: center;
`;

export const HomePageHeaderText = styled.span`
  color: ${(props) => props.theme.colors.darkBlue};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-left: 15px;
`;
