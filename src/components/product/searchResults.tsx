import useSearchResults from "../../hooks/Product/useSearchResults";
import ProductCard from "./productCard";
import Loading from "../ui/loading";
import { ProductListContainer } from "../../styles/product.style";
import { useAddToCart } from "../../hooks/Cart/useCart";

interface SearchResultsProps {
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const { searchResults, loading, error } = useSearchResults(query);
  const { handleAddToCart } = useAddToCart();

  if (!query.trim()) return null;

  return (
    <section>
      <h2>Resultados de búsqueda para "{query}"</h2>

      {loading && <Loading />}
      {error && <p>{error}</p>}

      {!loading && !error && searchResults.length > 0 && (
        <>
          {searchResults.length === 1 ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ProductCard product={searchResults[0]} onAddToCart={() => handleAddToCart(searchResults[0])} />
            </div>
          ) : (
            <ProductListContainer>
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(searchResults[0])} />
              ))}
            </ProductListContainer>
          )}
        </>
      )}

      {!loading && !error && searchResults.length === 0 && <p>No se encontraron productos.</p>}
    </section>
  );
};

export default SearchResults;