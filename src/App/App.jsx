import React from "react";
import Header from "../Header/Header";
import DatePicker from "../DatePicker/DatePicker";
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.App}>
      <Header />
      <DatePicker />
    </div>
  );
};

export default App;
