//import logo from './logo.svg';
import Navigation from './components/Navigation';
import {BrowserRouter, Routes, Route} from "react-router-dom"; // For creating multiple pages and routes
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector((state)=> state.user);
  return (
    <BrowserRouter> 
      <Navigation />
      <Routes>
        <Route path="/"  element={<Home />} />
        {!user && (
          <>
        <Route path="/login"  element={<Login />} />
        <Route path="/signup"  element={<Signup />} />
        </>
        )};
        <Route path="/chat"  element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//Each Route is a page