import React from "react";
import Payment from "./Payment";

const PaymentTable = ({ payments }) => {
  return (
    <div style={{ marginBottom: "1em" }}>
      <span style={{ fontWeight: "bold" }}>
        Итого можете внести в качестве досрочных:
      </span>
      {payments.map((elem, index) => (
        <Payment pay={elem} key={index} index={index} />
      ))}
    </div>
  );
};

export default PaymentTable;
