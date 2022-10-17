import { useContext } from "react";
import MainContext from "../MainContext";

const Product = ({ product }) => {
  const { basket, setBasket, total, money } = useContext(MainContext);

  const basketItem = basket.find((item) => item.id === product.id);

  const AddBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount++;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
          ...product,
        },
      ]);
    }
  };

  const DeleteBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    checkBasket.amount--;
    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    }
  };

  return (
    <div className="product-item">
      <img src={product.image} alt="" />
      <h5>{product.title}</h5>

      <div className="price">$ {product.price}</div>

      <div className="actions">
        <button disabled={!basketItem} onClick={DeleteBasket}>
          Sat
        </button>
        <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
        <button disabled={total + product.price > money} onClick={AddBasket}>
          Satın Al
        </button>
      </div>
    </div>
  );
};

export default Product;
