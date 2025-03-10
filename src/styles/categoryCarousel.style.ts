import styled from "styled-components";
import { Link } from "react-router-dom";

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 15px 0px 15px;
`;

export const CarouselWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 8px;
  justify-content: center;
  width: 100%;
`;

export const ViewMoreButton = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  background-color: #ff9900;
  color: white;
  padding: 8px 10px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #e68a00;
  }
`;