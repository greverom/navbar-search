import { useEffect, useRef, useState } from "react";
import { ProductCardProps } from "../../interface/products";
import   ProductDetailModal from "./productDeatilModal";
import { ProductImage, ProductTitle,  
         ProductCardContainer, ProductImageWrapper,
         ProductInfo} from "../../styles/product.style";
import { useGsapHoverTitle } from "../../hooks/animation/usegsapHoverTitle";

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
  const titleRef = useRef<HTMLDivElement | null>(null); 
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      const isTextTruncated = titleRef.current.scrollWidth > titleRef.current.clientWidth;
      setIsTruncated(isTextTruncated);
    }
  }, []);

  useGsapHoverTitle(titleRef, isHovered && isTruncated);

  return (
    <>
      <ProductCardContainer onClick={() => setIsModalOpen(true)}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
        <ProductImageWrapper> 
          <ProductImage src={product.image} alt={product.title} />
        </ProductImageWrapper>
        <ProductTitle>
          <div ref={titleRef}>{product.title}</div>
        </ProductTitle>
        <ProductInfo>
          {/* <ProductPrice>💲{product.price.toFixed(2)}</ProductPrice> */}
          {/* <CartIconWrapper onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
            <CartIcon />
          </CartIconWrapper> */}
        </ProductInfo>
      </ProductCardContainer>


      <ProductDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={product}
        onAddToCart={onAddToCart}
      />
    </>
  );
};

export default ProductCard;