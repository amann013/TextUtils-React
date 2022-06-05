
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React ,{ useState } from 'react' ;
 import Alert from './components/Alert';
//  import About from './components/About';
//  import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else {
      setMode('dark');
    }
  }
  return (
      <>
   { /* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
   {/* <Router> */}
   <Navbar title = "TextUtils" mode={mode}  toggleMode = {toggleMode}/>
    <Alert alert = {alert}/> 
     <div className="container my-3">
     {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
        
          <Route path="/"> */}
          <TextForm heading = "Enter the text to analyze below "/> 
          
          {/* </Route>
    </Switch>  */}
    </div>
    {/* </Router> */}
   {/* <About/> */}
     
       
      </>
  );
}

export default App;
