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
    <>
      {!popUp ? (
        <div className="main-page" style={{ backgroundColor: "#ff4f4f" }}>
          <button
            onClick={() => handleClick(!popUp)}
            className="main-page__button"
          >
            Налоговый вычет
          </button>
        </div>
      ) : null}
      {popUp ? <PopForm isClose={isClose} /> : null}
    </>
  );
};

export default App;
