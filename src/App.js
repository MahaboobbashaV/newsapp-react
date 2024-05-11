import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      darkMode: false,
    };
  }

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  toggleMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }));
  };
  
  render() {
    return (
      <div> 
      <Router>
        <Navbar 
        darkMode={this.state.darkMode}
        toggleMode={this.toggleMode} 
        />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <Routes>
          <Route exact path="/" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} darkMode={this.state.darkMode} key="general" pageSize={5} country="in" category="general" />} />
          <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="business" pageSize={5} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} darkMode={this.state.darkMode} key="general" pageSize={5} country="in" category="general" />} />
          <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="health" pageSize={5} country="in" category="health"/>} />
          <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="science" pageSize={5} country="in" category="science" />} />
          <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="sports" pageSize={5} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="technology" pageSize={5} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
    )
  }
}
