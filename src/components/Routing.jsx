import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import AttrPage from '../Pages/AttrPage';
import AllHeroesPage from '../Pages/AllHeroesPage';
import StartPage from '../Pages/StartPage';
// import Project from '../pages/Project'
// import Post from '../pages/Post'
// import About from '../pages/About'

function Routing(){
  return(
  <Routes>
    <Route path="/" element={<StartPage />} />
    <Route path="/all" element={<AllHeroesPage />} />
    <Route path="/str" element={<AttrPage />} />
    <Route path="/agi" element={<AttrPage />} />
    <Route path="/int" element={<AttrPage />} />
  </Routes>)
}

export default Routing