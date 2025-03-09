import { Product } from "../../interface/products";
import   ProductCard from "../product/productCard";
import { CarouselContainer, CarouselWrapper, ViewMoreButton } from "../../styles/categoryCarousel.style";

interface CategoryCarouselProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  category: string;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ products, onAddToCart, category }) => {
  const visibleProducts = products.slice(0, 4);

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </CarouselWrapper>
      <ViewMoreButton to={`/category/${category}`}>Ver más</ViewMoreButton> 
    </CarouselContainer>
  );
};

export default CategoryCarousel;