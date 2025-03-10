import styled from "styled-components";

export const HomeContainer = styled.div`
 width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 30px;
  background-color: rgba(128, 128, 128, 0.11);
  display: flex;
  gap: 25px;
  overflow-x: auto; 
  scroll-behavior: smooth;
  white-space: nowrap;
  margin: -280px 0 30px; 
  padding-bottom: 25px;
  z-index: 2;

  &::-webkit-scrollbar {
    height: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 3px;
  }
`;
export const CategoryWrapper = styled.div`
  flex: 0 0 400px; 
  height: 400px; 
  background: white;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(255, 255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
`;