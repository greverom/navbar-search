import { Typography } from "@mui/material";
import   RoomIcon from "@mui/icons-material/Room";
import   AccountCircleIcon from "@mui/icons-material/AccountCircle";
import   ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import   SearchBar from "./searchBar";
import { StyledAppBar, StyledToolbar, StyledBox, StyledButton, StyledCartIcon,
       } from "../../../styles/navbar";

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>

        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          CindyStore
        </Typography>

        <StyledBox>
          <RoomIcon sx={{ mr: 0.5 }} />
          <Typography variant="body2">Enviar a Gregorio</Typography>
        </StyledBox>

        <SearchBar />

        <StyledButton component={Link} to="/account">
          <AccountCircleIcon />
          Cuenta y Listas
        </StyledButton>

        <StyledButton component={Link} to="/orders">
          Devoluciones y Pedidos
        </StyledButton>

        <StyledCartIcon>
          <ShoppingCartIcon />
        </StyledCartIcon>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;