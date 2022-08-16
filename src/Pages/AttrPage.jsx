import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text } from 'recharts';
import { mapStatus } from "../components/Constant";



function AttrPage() {

  const location = useLocation();
  let heroes = location.state;
  const primaryAttr = heroes[0].primary_attr;
  const [status, setStatus] = useState("base_health_regen");
  const [barColor, setBarColor] = useState([]);
  // const imgBaseUrl = "http://cdn.dota2.com";


  const barAxisSpace = 10;
  const maxTextWidth = 60;

  useEffect(() => {
    if(primaryAttr==='str'){
      setBarColor(["#e5220d","#6C2828"]);
    }else if(primaryAttr==='agi'){
      setBarColor(["#20bd18","#314030"]);
    }else{
      setBarColor(["#3a34d9","#222266"]);
    }
    heroes.sort((a, b) => b[status] - a[status])
  }, [primaryAttr]);


  function clickButton(event) {
    // event.preventDefault()
    const orderStatus = mapStatus[event.target.innerHTML];
    setStatus(orderStatus);
    heroes.sort((a, b) => b[orderStatus] - a[orderStatus]);
  }

  return <>
    <header>
      <div className="tabs is-centered is-boxed is-medium">

        {Object.entries(mapStatus).map(([key, val]) => {
          return <li key={key} className={status === val ? "is-active" : ""}>
            <a onClick={clickButton}>{key}</a></li>
        })}
      </div>
    </header>
    <div className="body-zone">
      <ResponsiveContainer width={"90%"} height={50 * heroes.length} debounce={50}>
        <BarChart
          data={heroes}
          layout="vertical"
          margin={{ left: 100, right: maxTextWidth + (barAxisSpace - 8) }}
        >
      <defs>
        <linearGradient
          id="colorUv"
          x1="0"
          y1="20%"
          x2="0"
          y2="100%"
          spreadMethod="reflect"
        >
          <stop offset="0" stopColor={barColor[0]} />
          <stop offset="1" stopColor={barColor[1]} />
        </linearGradient>
      </defs>
        <XAxis hide axisLine={false} type="number" />
        <YAxis
          yAxisId={0}
          dataKey="localized_name"
          type="category"
          axisLine={true}
          tickLine={false}
          tick={{ fill: 'white' }}
        />
        <YAxis
          orientation="right"
          yAxisId={1}
          dataKey={status}
          type="category"
          axisLine={false}
          tickLine={false}
          tickFormatter={value => value.toLocaleString()}
          mirror
          tick={{
            transform: `translate(${maxTextWidth + barAxisSpace}, 0)`,
            fill: 'white'
          }}
        />
        <Bar dataKey={status} minPointSize={2} barSize={35}>
          {heroes.map((d, idx) => {
            return <Cell key={idx} fill="url(#colorUv)" />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
  </>
}
export default AttrPage

