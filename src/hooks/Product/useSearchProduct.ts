import { useState, useEffect } from "react";
import { Product } from "../../interface/products";
import useProducts from "./useProducts"; 

const useSearchProducts = () => {
  const { products } = useProducts(); 
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isTyping, setIsTyping] = useState(false);

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
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    setIsTyping(true); 
  };

  return { searchTerm, setSearchTerm, filteredProducts, handleSelectSuggestion, handleInputChange };
};

export default useSearchProducts;