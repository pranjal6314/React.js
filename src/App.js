
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState}from 'react';
function App() {
  const [mode1,setMode]=useState("dark");
  const togglemode=()=>{
    if(mode1==='light'){
          setMode('dark')
          
          document.body.style.backgroundColor='#a2b9bc'
    }else{
      setMode('light');
      document.body.style.backgroundColor='#dac292'
    }
  }
  
  return (
   
   <>
     {/* <Navbar /> */}
     <Navbar title="TextUtils" about="About Textutils" togglemode={togglemode} mode1={mode1}/>
     <div className="container my-3">
      <TextForm heading="Enter Your Text For Analysis"/>
      {/* <About/>  */}
     </div>
     
     
   </>
  );
}

export default App;