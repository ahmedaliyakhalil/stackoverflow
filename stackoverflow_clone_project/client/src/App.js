import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import './App.css';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from "./actions/question";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllQuestions()); 
    

  }, [dispatch]);

  return (
    <div className="App"    >
      <Router>
        <Navbar/>
       
        
        <AllRoutes />
      </Router>

    </div>
   
  );
}

export default App;
