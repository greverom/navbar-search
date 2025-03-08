import Electronics from "../components/categories/electronics";
import Jewelery from "../components/categories/jewelery";
import MenClothing from "../components/categories/mensClothing";
import WomenClothing from "../components/categories/womenClothing";


const Home = () => {
  return (
    <div>
      <h1>Bienvenido a CindyStore</h1>
      <Electronics />
      <Jewelery />
      <MenClothing />
      <WomenClothing />
    </div>
  );
};

export default Home;