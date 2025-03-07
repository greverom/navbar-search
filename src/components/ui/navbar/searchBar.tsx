import SearchIcon from "@mui/icons-material/Search";
import useSearchNavigation from "../../../hooks/useSearchNavigation"; 
import { navbarRoutes } from "../../../config/navbarRoutes";
import { SearchContainer, CategorySelect, StyledInput, StyledIconButton, StyledMenuItem,
        } from "../../../styles/navbar";

const SearchBar = () => {
  const { selectedRoute, handleRouteChange, handleSearch } = useSearchNavigation();

  return (
    <SearchContainer>
     <CategorySelect value={selectedRoute} onChange={handleRouteChange}>
        {navbarRoutes.map((route) => (
          <StyledMenuItem key={route.path} value={route.path}>
            {route.name}
          </StyledMenuItem>
        ))}
      </CategorySelect>

      <StyledInput placeholder="Buscar..." />
      <StyledIconButton onClick={handleSearch}>
        <SearchIcon />
      </StyledIconButton>
    </SearchContainer>
  );
};

export default SearchBar;