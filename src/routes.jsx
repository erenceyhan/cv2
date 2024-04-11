import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Contact from './pages/contact/Contact.jsx';
import Login from './pages/login/Login.jsx';

export default function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
