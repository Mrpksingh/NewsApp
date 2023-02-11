import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Footer'

import Home from './Home'
import Navbar from './Navbar'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      language:"hi",
      search:""
    }
  }
  changeLanguage=(data)=>{
     this.setState({language:data})
  }
  changeSearch=(data)=>{
     this.setState({search:data})
  }
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
      <Routes>
        <Route path="/" element={<Home search={this.state.search} language={this.state.language} q="All"/>}/>
        <Route path="politics" element={<Home search={this.state.search} language={this.state.language} q="Politics"/>}/>
        <Route path="crime" element={<Home search={this.state.search} language={this.state.language} q="Crime"/>}/>
        <Route path="education" element={<Home search={this.state.search} language={this.state.language} q="Education"/>}/>
        <Route path="cricket" element={<Home search={this.state.search} language={this.state.language} q="Cricket"/>}/>
        <Route path="india" element={<Home search={this.state.search} language={this.state.language} q="India"/>}/>
        <Route path="covid" element={<Home search={this.state.search} language={this.state.language} q="Covid"/>}/>
        <Route path="fifa" element={<Home search={this.state.search} language={this.state.language} q="Fifa"/>}/>
        <Route path="technology" element={<Home search={this.state.search} language={this.state.language} q="Technology"/>}/>
        <Route path="science" element={<Home search={this.state.search} language={this.state.language} q="Science"/>}/>
        <Route path="jokes" element={<Home search={this.state.search} language={this.state.language} q="Jokes"/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      </>
    )
  }
}
