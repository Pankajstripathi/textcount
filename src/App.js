import './App.css';
import { BrowserRouter , Route, Routes, NavLink } from 'react-router-dom'
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react';
import Alert from './Component/Alert';


function App() {
  const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) =>{
    setAlert({
      msg:  message,
      type: type  
          })
          setTimeout(() => {
            setAlert(null);
          }, 2000);
   }

  const togglemode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#22588d';
      showAlert('Dark Mode has enabled', 'success');
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has enabled', 'success');
    } 
  }

  return (
   <>
  {/* <Navbar/> */}
  <Navbar about="About Us" mode={mode} togglemode={togglemode}/>  
  <Alert alert={alert}/>
  {/* <TextForm  heading="Enter Your Text below" mode={mode} /> */}
  {/* <About/> */}
  <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Homescreen />} /> */}
          {/* <Route path="paymentForm" element={<PaymentForm />} /> */}
          <Route path="About" element={<About />} />
  
          <Route path="TextForm" element={<TextForm  heading="TextChanger - Word Counter, Character Counter" mode={mode} />} />
           
        </Routes>
      </BrowserRouter>
  
   </>
  );
}

export default App;
