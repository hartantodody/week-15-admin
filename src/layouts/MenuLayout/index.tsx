import { Footer, Navbar } from "../../components";
import { Props } from "../../interface";

const MainLayout = (children: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
