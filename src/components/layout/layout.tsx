import AppRoutes from "../../router/appRoute";
import { LayoutContainer, Content } from "../../styles/layout";
import Navbar from "../ui/navbar/navbar";

const Layout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <Content>
        <AppRoutes /> 
      </Content>
    </LayoutContainer>
  );
};

export default Layout;