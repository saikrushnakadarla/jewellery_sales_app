import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomerRegistration from './Components/Modules/CustomerRegistration/CustomerRegistration';
import Saleslogin from './Components/Pages/Login/Saleslogin'
import SalespersonRegister from './Components/Modules/Admin/Salespersonregistration/Salespersonsregistration';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/customerregistration" element={<CustomerRegistration />} />
        <Route path="/saleslogin" element={<Saleslogin />} />
        <Route path='/salepersonregister' element={<SalespersonRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
