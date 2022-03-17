import AccountsContext from "../../store/AccountsContext";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { useContext } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#EEF3F8",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height: "34px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "25ch",
    [theme.breakpoints.up("md")]: {
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

const SearchBar = (props) => {
  const ctxAccounts = useContext(AccountsContext);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon fontSize="small" />
        </SearchIconWrapper>
        <StyledInputBase
          {...props}
          inputProps={{ "aria-label": "search" }}
          onChange={(ev) => ctxAccounts.queryAccounts(ev.target.value)}
        />
      </Search>
    </>
  );
};

export default SearchBar;
