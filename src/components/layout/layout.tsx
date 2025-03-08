import { Suspense } from "react";
import AppRoutes from "../../router/appRoute";
import { LayoutContainer, Content } from "../../styles/layout";
import Loading from "../ui/loading";
import Navbar from "../ui/navbar/navbar";

const Layout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <Content>
        <Suspense fallback={<Loading />}> 
          <AppRoutes />
        </Suspense>
      </Content>
    </LayoutContainer>
  );
};

export default Layout;