import styled from "styled-components";
import { Link } from "react-router-dom";

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CarouselWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 15px;
  justify-content: center;
  width: 100%;
`;

export const ViewMoreButton = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  background-color: #ff9900;
  color: white;
  padding: 8px 18px;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background-color: #e68a00;
  }
`;