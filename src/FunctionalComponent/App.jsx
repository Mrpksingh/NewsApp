import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Footer'

import Home from './Home'
import Navbar from './Navbar'

export default function App(){
  var [language,setlanguage]= useState("hi")
  var [search,setsearch]=useState("")
  const changeLanguage=(data)=>{
     setlanguage(data)
  }
  const changeSearch=(data)=>{
     setsearch(data)
  }
    return (
      <>
      <BrowserRouter>
      <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch}/>
      <Routes>
        <Route path="/" element={<Home search={search} language={language} q="All"/>}/>
        <Route path="politics" element={<Home search={search} language={language} q="Politics"/>}/>
        <Route path="crime" element={<Home search={search} language={language} q="Crime"/>}/>
        <Route path="education" element={<Home search={search} language={language} q="Education"/>}/>
        <Route path="cricket" element={<Home search={search} language={language} q="Cricket"/>}/>
        <Route path="india" element={<Home search={search} language={language} q="India"/>}/>
        <Route path="covid" element={<Home search={search} language={language} q="Covid"/>}/>
        <Route path="fifa" element={<Home search={search} language={language} q="Fifa"/>}/>
        <Route path="technology" element={<Home search={search} language={language} q="Technology"/>}/>
        <Route path="science" element={<Home search={search} language={language} q="Science"/>}/>
        <Route path="jokes" element={<Home search={search} language={language} q="Jokes"/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      </>
    )
}
