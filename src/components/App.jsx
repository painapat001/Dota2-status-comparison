import React, { useEffect, useState } from "react";
import axios from "axios"
import { NavLink } from 'react-router-dom'
import Routing from "./Routing";


function App(){

const [allHeroes, setAllHeroes] = useState([]);
const [strHeroes, setStrHeroes] = useState([]);
const [agiHeroes, setAgiHeroes] = useState([]);
const [intHeroes, setIntHeroes] = useState([]);
const [isLoading, setIsLoading] = useState(false);

const strIconUrl = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Strength_attribute_symbol.png';
const agiIconUrl = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2d/Agility_attribute_symbol.png';
const intIconUrl = 'https://static.wikia.nocookie.net/dota2_gamepedia/images/5/56/Intelligence_attribute_symbol.png';


useEffect(()=>{
    // fetch('/express_backend')
    // .then(res => res.json())
    // .then(data => setheroStats(data));
    setIsLoading(true);
    axios.get("/express_backend").then(response => {
        // console.log(response.data);
        setAllHeroes(response.data);
        setStrHeroes(()=> response.data.filter((hero) => hero.primary_attr === "str"))
        // setStrHeroes(prevValue=>{
        //     return {...prevValue,base_hp:prevValue.base_health+22.5*prevValue.base_str};
        // });
        setAgiHeroes(()=> response.data.filter((hero) => hero.primary_attr === "agi"));
        setIntHeroes(()=> response.data.filter((hero) => hero.primary_attr === "int"));
        setIsLoading(false);
});},[]);


    // return (
    //     <div>
    //     <header>DOTA2 Heroes</header>
    //     {/* <p>{heroStats}</p> */}
    //     {!isLoading ? <div>
    //     <GroupHeroes data={strHeroes} primaryAttr="str" /> 
    //     <GroupHeroes data={agiHeroes} primaryAttr="agi" />
    //     <GroupHeroes data={intHeroes} primaryAttr="int" />
    //     </div>
    //     :<h1>Loading . . .</h1>}
    //     </div>
    // )

    return (
        <div className="my-app">
          <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="container">
              <div className="navbar-brand">
                  <img className="navbar-item" src={'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png'} alt="Dota2 logo" width="200"/>
              </div>
              <div className="navbar-menu">
                <div className="navbar-end">
                  <NavLink to="/all" state={allHeroes} className={({ isActive }) => "navbar-item" + (isActive ? " activated" : "")} >All Heroes</NavLink>
                  <NavLink to="/str" state={strHeroes} className={({ isActive }) => "navbar-item" + (isActive ? " activated" : "")}><img alt="str-icon" src={strIconUrl} />Strength</NavLink>
                  <NavLink to="/agi" state={agiHeroes} className={({ isActive }) => "navbar-item" + (isActive ? " activated" : "")}><img alt="agi-icon" src={agiIconUrl} />Agility</NavLink>
                  <NavLink to="/int" state={intHeroes} className={({ isActive }) => "navbar-item" + (isActive ? " activated" : "")}><img alt="int-icon" src={intIconUrl} />Intelligence</NavLink>
                </div>
              </div>
            </div>
          </nav>
  
          <Routing />
        </div>
      )



}
export default App