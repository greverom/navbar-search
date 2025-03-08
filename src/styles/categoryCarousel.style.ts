import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  overflow-x: auto; 
  white-space: nowrap; 
  padding: 10px 0;
  scrollbar-width: thin; 
  scrollbar-color: #aaa transparent; 

  &::-webkit-scrollbar {
    height: 8px; 
  }

  &::-webkit-scrollbar-thumb {
    background: #aaa; 
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: stretch; 
  
  & > div {

    flex: 0 0 220px; 
    height: 320px; 
  }
`;