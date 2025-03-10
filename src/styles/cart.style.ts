import styled from "styled-components";


// estilos de cart Page
export const Container = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #222;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
// estilos de cart Page


export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;


export const CartItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 5px;
`;

export const CartItemDetails = styled.div`
  flex-grow: 1;
`;

export const CartItemTitle = styled.h4`
  font-size: 12px;
  text-align: left;
  margin: 0;
`;

export const CartItemPrice = styled.p`
  font-size: 12px;
  text-align: left;
  margin: 5px 0 0;
`;

export const CartListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: #777;
  margin-top: 20px;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background: #ff9900;
  color: white;
  border-radius: 5px;

  &:hover {
    background: #ff6600;
  }
  svg {
    font-size: 13px;
  }
`;

export const QuantityText = styled.span`
  font-size: 14px;
`;


export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 10px;
`;
