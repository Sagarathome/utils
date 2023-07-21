
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route, } from "react-router-dom";



function App() {
  const [mode, setmode] = useState("light");
  // const [mode2, setmode2] = useState("light");
  // const [mode3, setmode3] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "#042745"
      showAlert("Dark mode enable", "success")
    } else {
      setmode('light')

      document.body.style.backgroundColor = "white"
      showAlert("Light mode enable", "success")

    }
  }

 
  return (
    <>
      


        <BrowserRouter>
      <Navbar title="TextUtils" about="About us" mode={mode} togglemode={togglemode}  />
      <Alert alert={alert} />
              <div className="container my-4 text-center" >
        {/* {<TextForm heading="Enter your Text Below" mode={mode} showAlert={showAlert} />} */}
          <Routes >
              <Route path="/about" element={<About mode={mode} />} />
              <Route path="/" element={<TextForm heading="Enter your Text Below" mode={mode} showAlert={showAlert} />}>
              
              {/* <Route path="contact" element={<Contact />} /> */}
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
           </div>
      </BrowserRouter>

    </>
  );


}

export default App;
