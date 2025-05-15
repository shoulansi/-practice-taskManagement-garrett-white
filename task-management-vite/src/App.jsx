import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from './components/TaskList';

function App() {

  return (
   <>
   <TaskList/>
      <Router>
        <Routes>
          <Route path="/post/:postId" element={<TaskList/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
