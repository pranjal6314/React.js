
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert' 
import React, {useState}from 'react';
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
    if(mode1==='light'){
          setMode('dark')
          showAlert("dark mode is enabled","success");
          
          document.body.style.backgroundColor='#a2b9bc'
    }else{
      setMode('light');
      document.body.style.backgroundColor='#dac292'
      showAlert("light mode is enabled","success");
    }
  }
  
  return (
   
   <>
     {/* <Navbar /> */}
     <Navbar title="TextUtils" about="About Textutils" togglemode={togglemode} mode1={mode1}/>
     <Alert alert= {alert}/>
     <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter Your Text For Analysis"/>
      {/* <About/>  */}
     </div>
     
     
   </>
  );
}

export default App;