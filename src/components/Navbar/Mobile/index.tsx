import { CustomButton } from "../..";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Props } from "../../../interface";
import "../Navbar.module.css";

const MobileMenu = ({ open, onClose }: Props) => (
  <Box
    style={{ display: open ? "block" : "none" }}
    className={`mobile-menu ${open ? "open" : ""}`}
  >
    <Link to="/" style={{ textDecoration: "none" }}>
      <CustomButton
        type="button"
        variant="outlined"
        color="primary"
        onClick={onClose}
        fullWidth
      >
        Home
      </CustomButton>
    </Link>
    <Link to="/login" style={{ textDecoration: "none" }}>
      <CustomButton
        type="button"
        variant="outlined"
        color="primary"
        onClick={onClose}
        fullWidth
      >
        Login
      </CustomButton>
    </Link>
    <Link to="/signup" style={{ textDecoration: "none" }}>
      <CustomButton
        type="button"
        variant="outlined"
        color="primary"
        onClick={onClose}
        fullWidth
      >
        Sign Up
      </CustomButton>
    </Link>
  </Box>
);

export default MobileMenu;
