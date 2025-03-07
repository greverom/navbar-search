import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material";
import { navbarRoutes } from "../config/navbarRoutes"; 

const useSearchNavigation = () => {
  const [selectedRoute, setSelectedRoute] = useState(navbarRoutes[0].path);
  const navigate = useNavigate();

  const handleRouteChange = (event: SelectChangeEvent<unknown>) => {
    const newPath = event.target.value as string;
    setSelectedRoute(newPath);
    navigate(newPath);
  };

  const handleSearch = () => {
    navigate(selectedRoute);
  };

  return { selectedRoute, handleRouteChange, handleSearch };
};

export default useSearchNavigation;