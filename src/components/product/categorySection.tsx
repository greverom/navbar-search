import { useProductsByCategory } from "../../hooks/Product/useProductByCategory";
import { ProductListContainer } from "../../styles/product.style";
import Loading from "../ui/loading";
import ProductCard from "./productCard";

interface CategorySectionProps {
  category: string;
  title: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, title }) => {
  const { products, loading, error } = useProductsByCategory(category);

  return (
    <section>
      <h2>{title}</h2>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ProductListContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => {}} />
          ))}
        </ProductListContainer>
      )}
    </section>
  );
};

export default CategorySection;