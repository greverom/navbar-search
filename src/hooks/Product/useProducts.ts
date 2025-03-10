import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../interface/products";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error)
        setError("Error al obtener los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
