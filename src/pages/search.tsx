import { useLocation } from "react-router-dom";
import SearchResults from "../components/product/searchResults";

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || ""; 

  return (
    <section>
      <SearchResults query={query} />
    </section>
  );
};

export default Search;