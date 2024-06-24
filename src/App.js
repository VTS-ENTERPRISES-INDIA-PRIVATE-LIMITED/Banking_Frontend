import logo from './logo.svg';
import './App.css';
import Login  from './Components/Login/Login';
import Verifymail from './Components/Verifymail';
import Transactions from './Components/Transactions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recharge from './Components/Recharge';
import Fundtransfer from './Components/Fundtransfer';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     
  <Route path='/' element={<Fundtransfer/>}  />

   
     </Routes>
     </BrowserRouter>
    </div>
  );
}
   
export default App;
