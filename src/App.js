
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert' 
import React, {useState}from 'react';
import {
  BrowserRouter  as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode1,setMode]=useState("dark");
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const togglemode=()=>{
    setInterval(() => {
      document.title='TextUtils is best'
    }, 2000);
    setInterval(() => {
      document.title=' Install TextUtils '
    }, 1100);
    if(mode1==='light'){
          setMode('dark')
          showAlert("dark mode is enabled","success");
          document.title='TextUtils-Light'
          document.body.style.backgroundColor='#a2b9bc'
    }else{
      setMode('light');
      document.body.style.backgroundColor='#dac292'
      document.title='TextUtils-Darks'
      showAlert("light mode is enabled","success");
    }
  }
  
  return (
   
   <>
     {/* <Navbar /> */}
     <Router>
     <Navbar title="TextUtils" about="About Textutils" togglemode={togglemode} mode1={mode1}/>
     <Alert alert= {alert}/>
     <div className="container my-3">

      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text For Analysis"/>} />
          <Route exact path="/about" element={<About />} />
          
          
      </Routes>
   
      
      {/* <About/>  */}
     </div>
     </Router> 
     
   </>
  );
}

export default App;