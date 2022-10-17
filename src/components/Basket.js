import { useContext } from "react";
import MainContext from "../MainContext";
import "../App.css";

const Basket = () => {
  const { basket, total, ResetBasket } = useContext(MainContext);

  return (
    <div className="basket">
      {basket.map((item) => (
        <div key={item.id}>
          {item.title} x {item.amount}
        </div>
      ))}

      <div>Toplam : ${total}</div>
      <button onClick={ResetBasket}>Reset Basket</button>
    </div>
  );
};

export default Basket;
