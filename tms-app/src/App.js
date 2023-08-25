
import './App.css';
// import Header from "./components/Header";
import {toast,ToastContainer} from "react-toastify";
import { Button } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';

function App() {
  const btnHandle =()=>{
          toast.success("Hopefully I Created Something after too much efforts");
      };
  return (
    
   <div>

    <ToastContainer/>
    
    <Home/>
    
    </div>
  );
}

export default App;
