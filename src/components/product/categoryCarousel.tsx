import { Product } from "../../interface/products";
import ProductCard from "../product/productCard";
import { CarouselContainer, CarouselWrapper } from "../../styles/categoryCarousel.style";


interface CategoryCarouselProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ products, onAddToCart }) => {
  return (
    <CarouselContainer>
      <CarouselWrapper>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default CategoryCarousel;