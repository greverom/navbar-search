import   SearchIcon from "@mui/icons-material/Search";
import { navbarRoutes } from "../../../config/navbarRoutes";
import   useSearchBar from "../../../hooks/Product/useSearchBar";
import { SearchContainer, CategorySelect, StyledInput, StyledIconButton, 
         StyledMenuItem, SuggestionsContainer,
        } from "../../../styles/navbar";

const SearchBar = () => {
  const { selectedRoute,  handleRouteChange,  searchTerm,  filteredProducts,  
          handleSelectSuggestion, handleInputChange, handleSearch, handleKeyPress
          } = useSearchBar();

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
        onKeyPress={handleKeyPress}
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