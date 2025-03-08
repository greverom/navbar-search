import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column; 
  min-height: 100vh;
  overflow: hidden;
  min-height: calc(100vh - 80px);
`;

export const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
  margin-top: 80px; 
  background-color: #ffffff;
  max-width: 1300px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;