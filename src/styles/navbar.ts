import { AppBar, styled, Box, Toolbar, InputBase, IconButton, Button, Select, MenuItem } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "#131921", 
  padding: "5px 15px",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100, 
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "1400px", 
  margin: "0 auto",
  padding: "0 20px",
});

export const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "5px",
  flexGrow: 1,
  height: "42px",
  maxWidth: "600px",

  position: "relative",
  
  "&:focus-within": {
    borderColor: "#f3a847", 
  },
});

export const CategorySelect = styled(Select)({
  backgroundColor: "#e6e6e6",
  color: "black",
  fontSize: "13px",
  borderRadius: "5px 0 0 5px",
  minWidth: "140px",
  height: "100%",

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

export const StyledMenuItem = styled(MenuItem)`
  background-color: transparent !important; 
  color: black !important;

  &:hover {
    background-color: transparent !important; 
  }

  &.Mui-selected {
    background-color: transparent !important; 
  }
`;

export const StyledInput = styled(InputBase)({
  flex: 1,
  padding: "0 10px",
  height: "100%",

  "& input": {
    padding: "10px 0",
  },
});


export const SuggestionsContainer = styled("div")({
  position: "absolute",
  top: "110%",
  left: 0,
  width: "100%",
  background: "white",
  borderRadius: "5px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 10,
  maxHeight: "300px",
  overflowY: "auto",

  "& div": {
    padding: "7px 12px",
    cursor: "pointer",
    color: "#333",
    fontSize: "13px",
    borderBottom: "1px solid #eee",
    whiteSpace: "nowrap",        
    overflow: "hidden",          
    textOverflow: "ellipsis",

    "&:hover": {
      background: "#f5f5f5",
    },
  },
});

export const StyledIconButton = styled(IconButton)`
  background-color: #f3a847 !important; 
  border-radius: 0 5px 5px 0;
  color: #333 !important;
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover, &:focus, &:active {
    background-color: #f3a847 !important;
    color: #333 !important;
    box-shadow: none !important;
    border: none !important;
  }
` as typeof IconButton;

export const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "white",
  fontSize: "0.9rem",
});

export const StyledButton = styled(Button)`
  color: white !important;
  text-transform: none;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  gap: 8px;
  
` as typeof Button;

export const StyledCartIcon = styled(IconButton)`
  color:  #f3a847 !important;
  display: flex;
  align-items: center;
  justify-content: center;

` as typeof IconButton;