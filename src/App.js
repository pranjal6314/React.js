
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState}from 'react';
function App() {
  const [mode,setMode]=useState("light");
  return (
   
   <>
     {/* <Navbar /> */}
     <Navbar title="TextUtils" about="About Textutils" mode="mode"/>
     <div className="container my-3">
      <TextForm heading="Enter Your Text For Analysis"/>
      {/* <About/>  */}
     </div>
     
     
   </>
  );
}

export default App;