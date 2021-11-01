import React, { useState } from "react";
import PaymentTable from "./PaymentTable";

const PopForm = ({ isClose }) => {
  const [salary, setSalary] = useState("");
  const [payments, setPayments] = useState([]);

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

  const calculatePay = (payment) => {
    const resultArray = [];
    const MAX = 260000;
    const paymentOfYear = Math.ceil(payment * 12 * 0.13);
    console.log("paymentOfYear: ", paymentOfYear);
    const pay = Math.floor(MAX / paymentOfYear);
    console.log("pay", pay);
    const residue = MAX - pay * paymentOfYear;
    console.log("residue: ", residue);
    for (let index = 0; index < pay; index++) {
      resultArray.push(paymentOfYear);
    }
    resultArray.push(residue);
    console.log(resultArray);
    return resultArray;
  };

  return (
    <div>
      <button onClick={() => handleClick(true)}>X</button>
      <h1>Налоговый вычет</h1>
      <p>
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального дохода.
      </p>
      <form onSubmit={handleSubmit}>
        <span>Ваша зарплата в месяц</span>
        <input
          type="text"
          placeholder="Введите данные"
          value={salary}
          onChange={handleChange}
        />
        <span>Рассчитать</span>
        {payments ? <PaymentTable payments={payments} /> : null}
        <div>
          <span>Что уменьшаем ?</span>
          <button>Платёж</button>
          <button>Срок</button>
        </div>
        <button>Добавить</button>
      </form>
    </div>
  );
};

export default PopForm;
