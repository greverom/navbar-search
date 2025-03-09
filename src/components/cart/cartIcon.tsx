import { Link } from "react-router-dom";
import { useCart } from "../../hooks/Cart/useCart";


import { CartIcon as ShoppingCartIcon } from "../../assets/icons/icons";
import { useEffect, useState } from "react";
import CartAnimation from "./cartAnimations";
import { CartBadge, CartIconContainer, CartIconStyled } from "../../styles/cartAnimation.style";

export const CartIcon = () => {
  const { cart } = useCart();
  const [animate, setAnimate] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  useEffect(() => {
    if (cart.length > 0) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 700); 
    }
  }, [cart]); 

  return (
    <CartIconContainer>
      <Link to="/cart">
        <CartIconStyled>
          <ShoppingCartIcon />
          <CartAnimation trigger={animate} />
        </CartIconStyled>
        {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
      </Link>
    </CartIconContainer>
  );
};

export default CartIcon;