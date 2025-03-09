import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; 

  @media (max-width: 768px) 
    grid-template-columns: repeat(1, 1fr);
  }
`;