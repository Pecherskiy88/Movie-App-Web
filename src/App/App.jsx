import React, { Component } from "react";
import DatePicker from "../DatePicker/DatePicker";

// import s from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <DatePicker />
      </div>
    );
  }
}

export default App;

// Календарь импортировать сразу в компоненте Арр, фетч перенести в другой компонент, куда буду прокидывать пропсы(value календаря), а затем фетч будет вытягивать список по нужной дате. Компонент фетча на другом Роуте, а значит можно юзать componentDidMount
