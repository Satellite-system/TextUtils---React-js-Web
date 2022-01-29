// import logo from './logo.svg';
// import './App.css';

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";


function App() {
  const [mode, setmode] = useState('light'); //State about dark-mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=>{
      setAlert(null)
    }
    ,1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#050122' //'#042743'
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        {/* Container class to make it middle my class for margin in y  */}
        <TextForm heading='Enter Text Below to Analyse' mode={mode}  showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
