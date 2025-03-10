import { Link } from "react-router-dom";

const categories = ["Electronics", "Jewelery", "Men Clothing", "Women Clothing"];

const Categories = () => {
  return (
    <div>
      <h1>Todas las Categorías</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;