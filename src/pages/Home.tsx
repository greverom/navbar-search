import Electronics from "../components/categories/electronics";
import Jewelery from "../components/categories/jewelery";
import MenClothing from "../components/categories/mensClothing";
import WomenClothing from "../components/categories/womenClothing";
import ImageSlider from "../components/ui/imageSlider";
import { CategoryWrapper, HomeContainer } from "../styles/home.styles";

const Home = () => {
  return (
    <div>
    <ImageSlider />
    <HomeContainer>
      <CategoryWrapper><WomenClothing /></CategoryWrapper>
      <CategoryWrapper><MenClothing /></CategoryWrapper>
      <CategoryWrapper><Electronics /></CategoryWrapper>
      <CategoryWrapper><Jewelery /></CategoryWrapper>
    </HomeContainer>
  </div>
  );
};

export default Home;