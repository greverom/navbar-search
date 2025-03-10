import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column; 
  min-height: 100vh;
  overflow-x: auto;
  min-height: calc(100vh - 80px);
`;

export const Content = styled.main`
  flex-grow: 1;
  margin-top: 66px; 
  background-color: rgb(240, 240, 240);
  max-width: 100%;
  padding: 0;
  overflow-x: auto;
`;