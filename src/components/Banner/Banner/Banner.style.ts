import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.theme.colors.bannerColor};
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsContainer = styled.div`
  height: 100%;
  width: 15%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
