import styled, { keyframes } from "styled-components";

const floatUp = keyframes`
  0% { 
    transform: translate(var(--x, 0), 0) scale(0.5) rotate(var(--rotation-start));
    opacity: 0; 
  }
  20% { 
    transform: translate(var(--x, 0), -5px) scale(.6) rotate(calc(var(--rotation-start) + 100deg));  
    opacity: 1; 
  }
  40% { 
    transform: translate(var(--x, 0), -10px) scale(.7) rotate(calc(var(--rotation-start) + 144deg));  
    opacity: 1; 
  }
  60% { 
    transform: translate(var(--x, 3), -15px) scale(.8) rotate(calc(var(--rotation-start) + 216deg));  
    opacity: 1; 
  }
  80% { 
    transform: translate(var(--x, 5), -20px) scale(1) rotate(calc(var(--rotation-start) + 288deg));  
    opacity: 1; 
  }
  100% { 
    transform: translate(var(--x, 8), -25px) scale(1.1) rotate(calc(var(--rotation-start) + 360deg));  
    opacity: .3; 
  }
`;

export const StarsContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 30%;
  transform: translateX(-50%);
  display: flex;
  pointer-events: none;
  z-index: 100;
`;

export const Star = styled.div<{ index: number }>` 
 width: ${({ index }) => `${14 + (index % 13)}px`}; 
  height: ${({ index }) => `${14 + (index % 13)}px`};
    z-index: 1000;

  background-color: ${({ index }) =>
    ["#FFD700", "#FF69B4", "#00BFFF", "#FF4500"][index % 4]}; 

  border-radius: 50%;
  position: absolute;
   animation: ${floatUp} 0.6s ease-out;
  
  left: ${({ index }) => `${(index % 2 === 0 ? 1 : -1) * (2 + index * 0.5)}px`};
  top: ${({ index }) => `${Math.random() * 5 - 2 + index * 0.3}px`}; 
  opacity: 0;
  
  --x: ${({ index }) => `${(index % 2 === 0 ? -1 : 1) * (Math.random() * 15 + index * 1.2)}px`}; 

  --rotation-start: ${({ index }) => `${index * 180}deg`};
  
   clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 
    68% 57%, 79% 91%, 50% 70%, 
    21% 91%, 32% 57%, 2% 35%, 39% 35%
  );
`;

export const CartIconContainer = styled.div`
  position: relative;
`;

export const CartIconStyled = styled.div`
  width: 30px;
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
      transform: scale(1.05);
      fill: #ff6600;
    }
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -8px;
  background:rgb(214, 150, 61);
  color: white;
  font-size: 12px;
  border-radius: 50%;
  padding: 3px 7px;
   z-index: 10;
`;