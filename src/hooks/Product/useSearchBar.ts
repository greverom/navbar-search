import { useNavigate } from "react-router-dom";
import useSearchProducts from "./useSearchProduct";
import useSearchNavigation from "../useSearchNavigation";

const useSearchBar = () => {
  const navigate = useNavigate();
  const { selectedRoute, handleRouteChange } = useSearchNavigation();
  const { searchTerm, filteredProducts, handleSelectSuggestion, 
          handleInputChange, handleSearchSubmit, shouldSearch } = useSearchProducts();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm.trim()}`);
      handleSearchSubmit();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter"|| shouldSearch) {
      handleSearch();
    }
  };

  return {
    selectedRoute,
    handleRouteChange,
    searchTerm,
    filteredProducts,
    handleSelectSuggestion,
    handleInputChange,
    handleSearchSubmit,
    handleSearch,
    handleKeyPress,
  };
};

export default useSearchBar;