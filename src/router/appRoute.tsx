import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/ui/loading";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Cart = lazy(() => import("../pages/cart"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}> 
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;