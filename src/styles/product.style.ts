import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  padding: 20px auto;
`;

export const ProductTitle = styled.h3`
  font-size: 13px;
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  div {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin: auto;
    transition: max-width 0.3s ease, overflow 0.3s ease;
  }
`;

export const ProductCardContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  padding: 5px 0;
  width: 80%;
  margin: auto;
  height: 100%;
  margin-bottom: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  justify-content: space-between; 
  transition: transform 0.3s ease-in-out;

   &:hover ${ProductTitle} div {
    overflow: visible; 
    text-overflow: clip; 
    max-width: none; 
  }
`;

export const ProductImageWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 8px;
  height: 100px;
  overflow: hidden; 
`;

export const ProductImage = styled.img`
  width: 70%;
  height: 100%;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between; 
  align-items: center;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: rgb(84, 84, 84);
  font-weight: bold;
`;

export const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
    fill: rgb(84, 84, 84);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
