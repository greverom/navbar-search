import { useEffect, useState } from "react";
import { Star, StarsContainer } from "../../styles/cartAnimation.style";


interface CartAnimationProps {
  trigger: boolean;
}

const CartAnimation = ({ trigger }: CartAnimationProps) => {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShowStars(true);
      setTimeout(() => setShowStars(false), 1000); 
    }
  }, [trigger]);

  return (
    <StarsContainer>
      {showStars &&
        Array.from({ length: 5 }).map((_, i) => <Star key={i} index={i} />)}
    </StarsContainer>
  );
};

export default CartAnimation;