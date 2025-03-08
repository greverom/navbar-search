import SearchIcon from "@mui/icons-material/Search";
import useSearchNavigation from "../../../hooks/useSearchNavigation"; 
import { navbarRoutes } from "../../../config/navbarRoutes";
import { SearchContainer, CategorySelect, StyledInput, StyledIconButton, StyledMenuItem, SuggestionsContainer,
        } from "../../../styles/navbar";
import useSearchProducts from "../../../hooks/Product/useSearchProduct";

const SearchBar = () => {
  const { selectedRoute, handleRouteChange, handleSearch } = useSearchNavigation();
  const { searchTerm, filteredProducts, handleSelectSuggestion, handleInputChange } = useSearchProducts();

  return (
    <SearchContainer>
     <CategorySelect value={selectedRoute} onChange={handleRouteChange}>
        {navbarRoutes.map((route) => (
          <StyledMenuItem key={route.path} value={route.path}>
            {route.name}
          </StyledMenuItem>
        ))}
      </CategorySelect>
      <StyledInput 
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <StyledIconButton onClick={handleSearch}>
        <SearchIcon />
      </StyledIconButton>
      {filteredProducts.length > 0 && (
        <SuggestionsContainer>
          {filteredProducts.map((product) => (
            <div key={product.id}
            onClick={() => handleSelectSuggestion(product.title)}
            >{product.title}</div>
          ))}
        </SuggestionsContainer>
      )}
    </SearchContainer>
  );
};

export default SearchBar;