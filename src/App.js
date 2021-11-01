import React, { useState } from "react";
import "./style/App.scss";
import PopForm from "./components/PopForm";

const App = () => {
  const [popUp, setPopUp] = useState(false);
  const handleClick = (state) => {
    setPopUp(state);
  };
  const isClose = (state) => {
    setPopUp(!state);
  };

  return (
    <div>
      {!popUp ? (
        <button onClick={() => handleClick(!popUp)}>Налоговый вычет</button>
      ) : null}
      {popUp ? <PopForm isClose={isClose} /> : null}
    </div>
  );
};

export default App;
