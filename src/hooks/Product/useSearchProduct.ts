import { useState, useEffect } from "react";
import { Product } from "../../interface/products";
import useProducts from "./useProducts"; 
import { useLocation } from "react-router-dom";

const useSearchProducts = () => {
  const { products } = useProducts(); 
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [shouldSearch, setShouldSearch] = useState(false);

  useEffect(() => {
    if (searchTerm.length >= 1 && isTyping) { 
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]); 
    }
  }, [searchTerm, products, isTyping]);

  const handleSelectSuggestion = (productTitle: string) => {
    setSearchTerm(productTitle);
    setIsTyping(false);
    setFilteredProducts([]);
    setShouldSearch(true);
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    setIsTyping(true); 
    setShouldSearch(false);
  };

  const handleSearchSubmit = () => {
    setIsTyping(false);
    setFilteredProducts([]); 
  };

  useEffect(() => {
    if (!location.pathname.includes("/search")) {
      setSearchTerm("");
    }
  }, [location.pathname]);

  return { searchTerm, setSearchTerm, filteredProducts, handleSelectSuggestion, 
           handleSearchSubmit, handleInputChange, shouldSearch};
};

export default useSearchProducts;