import { useContext } from "react";
import MainContext from "../MainContext";
import "../App.css";

const Head = () => {
  const { money, total } = useContext(MainContext);

  const moneyFormat = (money) => {
    return money.toLocaleString();
  };

  return (
    <div className="head">
      {total > 0 && money - total !== 0 && (
        <div className="head-spendable">
          You have {moneyFormat(money - total)} $ left.
        </div>
      )}
      {total === 0 && (
        <div className="head-spendable">
          You have {moneyFormat(money)} $ to spend.
        </div>
      )}
      {money - total === 0 && (
        <div className="head-error">You are out of money!</div>
      )}
    </div>
  );
};

export default Head;
