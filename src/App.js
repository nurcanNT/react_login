import Login from './components/login';
import './App.css';
import Signup from './components/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;
