import React, { useState } from "react";
import PaymentTable from "./PaymentTable";
import "../style/PopForm.scss";

const PopForm = ({ isClose }) => {
  const [salary, setSalary] = useState("");
  const [payments, setPayments] = useState([]);
  const [reduceOption, setReduceOption] = useState("term");

  const handleClick = (state) => {
    isClose(state);
  };

  const handleChange = (event) => {
    setSalary(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayments(calculatePay(salary));
  };

  const handleChangeOption = (option) => {
    setReduceOption(option);
  };

  const calculatePay = (payment) => {
    const resultArray = [];
    const MAX = 260000;
    if (payment > 0) {
      const paymentOfYear = Math.ceil(payment * 12 * 0.13);
      const pay = Math.floor(MAX / paymentOfYear);
      const residue = MAX - pay * paymentOfYear;
      for (let index = 0; index < pay; index++) {
        resultArray.push(paymentOfYear);
      }
      resultArray.push(residue);
      return resultArray;
    }
    return resultArray;
  };

  return (
    <div className="pop-up-main">
      <div className="pop-up-main__window">
        <div className="pop-up-main__window__close">
          <h1>Налоговый вычет</h1>
          <button
            onClick={() => handleClick(true)}
            className="pop-up-main__window__close__close-button"
          >
            X
          </button>
        </div>
        <p className="pop-up-main__window__description">
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. <br />
          Размер налогового вычета составляет не более 13% от своего <br />
          официального дохода.
        </p>
        <form onSubmit={handleSubmit} className="pop-up-main__window__form">
          <span className="pop-up-main__window__form__salary">
            Ваша зарплата в месяц
          </span>
          <input
            min="20000"
            type="number"
            placeholder="Введите данные"
            value={salary}
            onChange={handleChange}
            className="pop-up-main__window__form__input"
          />
          <span className="pop-up-main__window__form__calculate">
            Рассчитать
          </span>
          {payments.length ? <PaymentTable payments={payments} /> : null}
          <div className="pop-up-main__window__form__reduce">
            <span className="pop-up-main__window__form__reduce__text">
              Что уменьшаем ?
            </span>
            <button
              className="pop-up-main__window__form__reduce_pay-term"
              style={
                reduceOption === "pay"
                  ? { backgroundColor: "#FF5E56", color: "white" }
                  : {}
              }
              onClick={() => handleChangeOption("pay")}
            >
              Платёж
            </button>

            <button
              className="pop-up-main__window__form__reduce_pay-term"
              style={
                reduceOption === "term"
                  ? { backgroundColor: "#FF5E56", color: "white" }
                  : {}
              }
              onClick={() => handleChangeOption("term")}
            >
              Срок
            </button>
          </div>
          <button className="pop-up-main__window__form__add">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default PopForm;
