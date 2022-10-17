import "./App.css";
import { useState, useEffect } from "react";
import MainContext from "./MainContext";
import Head from "./components/Head";
import products from "./products.json";
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(2000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const ResetBasket = () => {
    setBasket([]);
  };

  const data = {
    money,
    basket,
    setBasket,
    total,
    ResetBasket,
  };

  return (
    <MainContext.Provider value={data}>
      <Head></Head>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {total > 0 && <Basket />}
    </MainContext.Provider>
  );
}

export default App;
