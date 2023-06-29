import Hero from "./Components/Hero";
import Layout from "./Layouts/Layout";
import Features from "./Pages/Features";
import Offers from "./Pages/Offers";
import Product from "./Pages/Product";
import Products from "./Pages/Products";


function App() {
  return (
    <div className="App">
      <Layout children={[<Hero/>,<Offers/>,<Features/>,<Products/>,<Product/>]} />
    </div>
  );
}

export default App;
