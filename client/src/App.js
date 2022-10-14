import React,{useState, useEffect} from 'react';
import './App.css';
import Home from "./components/Home";
// import Login from "./components/Login";
// import { Route, Routes } from "react-router-dom";


import Navbar from './components/Navbar';
import AddPhoto from './components/AddPhoto';
import Photos from './components/Photos';

function App() {

  const [user, setUser] = useState(null);
   const [photo, setPhoto] = useState([]);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />;

   useEffect(() => {
    fetch("/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data);
      });
  }, []);
   

     console.log (photo)
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />

      <Home />
      <AddPhoto photo={photo} setPhoto={setPhoto} />
      <Photos photo={photo} setPhoto={setPhoto} />

    
    </div>
  );
}

export default App;
