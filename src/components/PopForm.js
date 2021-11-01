import React, { useState } from "react";
import PaymentTable from "./PaymentTable";

const PopForm = ({ isClose }) => {
  const [salary, setSalary] = useState("");

  const handleClick = (state) => {
    isClose(state);
  };

  const handleChange = (event) => {
    setSalary(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        {<PaymentTable />}
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
