import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Products } from "./components/Products/Products";
import Carousel from "./components/Carousel/Carouse";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Products />
      <Footer />
    </div>
  );
};
