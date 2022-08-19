import logo from './logo.svg';
import './App.css';
import Navabar from './Components/Navabar';
import Textform from './Components/Textform';

function App() {
  return (
 <>
   <Navabar title="My-Textutils" titleabout="About us"/>
   <div className="container my-3">
    <Textform heading="Enter the text to Analyse"/>
   </div>
   
    
 </>
  );
}

export default App;
