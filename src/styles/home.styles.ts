import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1300px; 
  margin: 0 auto;
  padding: 5px;
  background-color:rgba(255, 255, 255, 0);
  border-radius: 10px;
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; 

  @media (max-width: 768px) 
    grid-template-columns: repeat(1, 1fr);
  }
`;