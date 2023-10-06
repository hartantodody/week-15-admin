import Box from "@mui/material/Box";
import { Footer, Navbar } from "../../components";
import { Props } from "../../interface";

const MainLayout = ({ children }: Props) => {
  const navbarHeight = 64;
  const footerHeight = 64;

  const boxStyles = {
    backgroundImage: `url(/AdobeStock_281897358_Preview.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
  };
  return (
    <>
      <Navbar />
      <Box
        style={boxStyles}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={`calc(100vh - ${navbarHeight}px - ${footerHeight}px)`}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
