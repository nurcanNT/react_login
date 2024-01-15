import Login from './components/login';
import './App.css';
import Signup from './components/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResetPassword from './components/resetPassword';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/resetPassword" element={<ResetPassword />} />
    </Routes>
  </Router>
  );
}

export default App;
