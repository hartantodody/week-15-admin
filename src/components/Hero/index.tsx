import { useState } from "react";
import { CustomButton } from "..";
import { LoginModal } from "../../containers";
import { Link } from "react-router-dom";

const Hero = () => {
  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsOpen(false);
  };
  return (
    <main>
      <CustomButton
        type="button"
        variant="contained"
        style={buttonStyle}
        onClick={handleOpenLoginModal}
      >
        Login
      </CustomButton>
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <CustomButton type="button" variant="outlined" style={buttonStyle}>
          Sign Up
        </CustomButton>
      </Link>

      {isOpen && <LoginModal isOpen={isOpen} onClose={handleCloseLoginModal} />}
    </main>
  );
};

export default Hero;
