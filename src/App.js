import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => { 
 
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
    return (
      <div> 
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress = {setProgress} key="general" pageSize={10} country="in" category="general" />} />
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress = {setProgress} key="business" pageSize={10} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress = {setProgress} key="entertainment" pageSize={10} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News apiKey={apiKey} setProgress = {setProgress} key="general" pageSize={10} country="in" category="general" />} />
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress = {setProgress} key="health" pageSize={10} country="in" category="health"/>} />
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress = {setProgress} key="science" pageSize={10} country="in" category="science" />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress = {setProgress} key="sports" pageSize={10} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress = {setProgress} key="technology" pageSize={10} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
    )
  }
export default App;