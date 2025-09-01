import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomerRegistration from './Components/Modules/CustomerRegistration/CustomerRegistration';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/customerregistration" element={<CustomerRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
