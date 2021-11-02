import React, { useState } from "react";
import "./style/App.scss";
import PopForm from "./components/PopForm";

const App = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const handleClick = (state) => {
    setIsPopUpOpen(state);
  };

  const handleClose = () => {
    handleClick(!isPopUpOpen);
  };

  return (
    <>
      {!isPopUpOpen ? (
        <div className="main-page" style={{ backgroundColor: "#ff4f4f" }}>
          <button onClick={handleClose} className="main-page__button">
            Налоговый вычет
          </button>
        </div>
      ) : null}
      {isPopUpOpen ? <PopForm onClose={handleClose} /> : null}
    </>
  );
};

export default App;
