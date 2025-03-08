import { useAddToCart } from "../../hooks/Cart/useCart";
import { useProductsByCategory } from "../../hooks/Product/useProductByCategory";
import { CategoryContainer, CategoryTitle } from "../../styles/categorySection.style";
import Loading from "../ui/loading";
import CategoryCarousel from "./categoryCarousel";


interface CategorySectionProps {
  category: string;
  title: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, title }) => {
  const { products, loading, error } = useProductsByCategory(category);
  const { handleAddToCart } = useAddToCart();

  return (
    <CategoryContainer>
    <CategoryTitle>{title}</CategoryTitle>
    {loading && <Loading />}
    {error && <p>{error}</p>}
    {!loading && !error && <CategoryCarousel products={products} onAddToCart={handleAddToCart} />}
  </CategoryContainer>
  );
};

export default CategorySection;