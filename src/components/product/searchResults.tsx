import useSearchResults from "../../hooks/Product/useSearchResults";
import Loading from "../ui/loading";
import { useAddToCart } from "../../hooks/Cart/useCart";
import { AddToCartButton, ProductDescription, ProductDetails, ProductImage, ProductImageWrapper, ProductInfo, ProductPrice, 
         ProductTitle, RatingContainer, RatingCount, RatingStars, SearchResultItem, SearchResultsContainer } from "../../styles/searchResult.style";
import StarRating from "../ui/starRating";

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
      <SearchResultsContainer>
        {searchResults.map((product) => (
          <SearchResultItem key={product.id}>
            
            <ProductImageWrapper>
              <ProductImage src={product.image} alt={product.title} />
            </ProductImageWrapper>

            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>

              <RatingContainer>
                <RatingStars>
                  <StarRating rate={product.rating.rate} />
                </RatingStars>
                <RatingCount>{product.rating.count} votos</RatingCount>
              </RatingContainer>

              <ProductDetails>
                <ProductPrice>💲{product.price.toFixed(2)}</ProductPrice>
                <AddToCartButton onClick={() => handleAddToCart(product)}>
                  Agregar al carrito
                </AddToCartButton>
              </ProductDetails>

            </ProductInfo>
          </SearchResultItem>
        ))}
      </SearchResultsContainer>
    )}

    {!loading && !error && searchResults.length === 0 && <p>No se encontraron productos.</p>}
  </section>
  );
};

export default SearchResults;