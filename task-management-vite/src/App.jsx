import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetail';

function App() {

  return (
   <>
   <div>
      <Router>
        <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/post/:id" element={<TaskDetails/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
