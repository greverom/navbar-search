import styled, { keyframes } from "styled-components";

const floatUp = keyframes`
  0% { 
    transform: translate(var(--x, 0), 0) scale(0.8);
    opacity: 1; 
  }
  100% { 
    transform: translate(var(--x, 0), -30px) scale(1.2);
    opacity: 0; 
  }
`;

export const StarsContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 30%;
  transform: translateX(-50%);
  display: flex;
  pointer-events: none;
  z-index: 9999;
`;

export const Star = styled.div<{ index: number }>` 
 width: ${({ index }) => `${8 + (index % 3)}px`}; 
  height: ${({ index }) => `${8 + (index % 3)}px`};

  background-color: ${({ index }) =>
    ["#FFD700", "#FF69B4", "#00BFFF", "#FF4500", "#32CD32"][index % 5]}; 

  border-radius: 50%;
  position: absolute;
  animation: ${floatUp} 0.7s ease-out;
  
  left: ${({ index }) => `${Math.random() * 10 - 5 + index * 0.5}px`}; /* Menos separación horizontal */
  top: ${({ index }) => `${Math.random() * 5 - 2 + index * 0.3}px`}; /* Menos separación vertical */
  opacity: 0;
  
  --x: ${({ index }) => `${(index % 2 === 0 ? -1 : 1) * (Math.random() * 20 + index * 1.5)}px`}; 
  
  z-index: 1000;
   clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 
    68% 57%, 79% 91%, 50% 70%, 
    21% 91%, 32% 57%, 2% 35%, 39% 35%
  );
`;

export const CartIconContainer = styled.div`
  position: relative;
   z-index: 1;
`;

export const CartIconStyled = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    fill: #ff9900;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      fill: #ff6600;
    }
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -13px;
  right: -5px;
  background: red;
  color: white;
  font-size: 12px;
  border-radius: 50%;
  padding: 3px 7px;
   z-index: 20;
`;