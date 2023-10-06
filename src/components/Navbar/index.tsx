import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DesktopMenu from "./Desktop";
import MobileMenu from "./Mobile";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img
                src="/logo.webp"
                alt="logo"
                height={isMobile ? "30px" : "50px"}
              />
            </Link>
          </Typography>

          {isMobile ? (
            <>
              {" "}
              <IconButton
                color="inherit"
                aria-label="Open mobile menu"
                onClick={toggleMobileMenu}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <DesktopMenu />
          )}
        </Toolbar>
      </AppBar>
      {isMobile && mobileMenuOpen && (
        <MobileMenu open={mobileMenuOpen} onClose={toggleMobileMenu} />
      )}
    </Box>
  );
};

export default Navbar;
