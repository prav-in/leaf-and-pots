import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData } from "./components/Products/data";

function App() {
  return (
    <>
      <Hero />
      <Products data={productData} />
      <Footer />
    </>
  );
}

export default App;
