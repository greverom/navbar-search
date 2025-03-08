import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  overflow-x: auto; 
  white-space: nowrap; 
  padding: 10px 0;
  scrollbar-width: thin; 
  scrollbar-color: #aaa transparent; 
`;

export const CarouselWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: stretch; 
  
  & > div {

    flex: 0 0 220px; 
    height: 320px; 
  }
`;