import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Button color="inherit">Home</Button>
      </Link>
      <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
        <Button color="inherit">Login</Button>
      </Link>
      <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
        <Button color="inherit">Sign Up</Button>
      </Link>
    </>
  );
};

export default DesktopMenu;
