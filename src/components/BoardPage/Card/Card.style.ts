import styled from 'styled-components';

export const IconContainer = styled.div`
    visibility: hidden;
`;

export const CardContainer = styled.div`
    padding: 2px 5px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 1px 0 #091e4240;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &: hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transition: opacity 0.5s ease-in-out;
        transform: scale(1, 1.1);
        cursor: pointer;
    }

    &: hover ${IconContainer} {
      visibility: visible;
    }
`;

export const NameContainer = styled.div`
  width: 90%;
`;

export const CardContent = styled.div``;

export const CardEditor = styled.div``;
