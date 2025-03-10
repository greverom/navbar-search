import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams(); 
  return (
    <div>
      <h1>Categoría: {category}</h1>
      <p>Aquí se mostrarán los productos de la categoría {category}.</p>
    </div>
  );
};

export default CategoryPage;