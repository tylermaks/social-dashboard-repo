import React from "react"
import { useState } from "react";
import './Assets/Styles/App.scss';
import Header from './Components/Header';
import SummaryCard from './Components/SummaryCard';
import DailyCard from './Components/DailyCard';

function App() {

  const [mode, setMode] = useState(false);
  const modeClass = mode ? "darkMode" : "lightMode";

  const handleClick = () => { 
    setMode(!mode)
  }


  return (
    <main className={'app app--' + modeClass}>
      <div className="bg-box app__bg"></div>
      <Header 
        onClick={handleClick}
      />
      <SummaryCard/>
      <DailyCard/>
    </main>
  );
}

export default App;
