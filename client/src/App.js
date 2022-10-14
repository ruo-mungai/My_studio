import React,{useState, useEffect} from 'react';
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";


import Navbar from './components/Navbar';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
