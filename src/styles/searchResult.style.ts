import styled from "styled-components";

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 0;
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: flex-start;
  background: white;
  border-radius: 8px;
  border: 1px solid rgb(227, 227, 227);
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
`;

export const ProductImageWrapper = styled.div`
  flex: 0 0 150px;  
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: rgb(84, 84, 84);
  margin: 5px 0;
`;

export const AddToCartButton = styled.button`
  background-color: #f3a847;
  color: white;
  font-size: 14px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 180px; 
  margin-top: 8px;

  &:hover {
    background-color: #d48806;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
`;

/* ⭐ Nuevo: Estilos para el Rating ⭐ */
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
`;

export const RatingStars = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingCount = styled.span`
  font-size: 14px;
  color: #666;
`;