import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../../interface/products";

const useSearchResults = (query: string) => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query.trim()) {
        setSearchResults([]); 
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
        const filteredResults = response.data.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error al buscar productos:", error);
        setError("Error al obtener los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return { searchResults, loading, error };
};

export default useSearchResults;