import { useModalProps } from "react-simple-modal-provider";
import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { imgBaseUrl, rankUrl } from "./Constant";

export default () => {
    const { hero, avgStat } = useModalProps("HeroStatModal");
    //   console.log(hero)
    const data = [
        {
            subject: 'str',
            hero: hero.base_str,
            avg: avgStat.str,
        },
        {
            subject: 'agi',
            hero: hero.base_agi,
            avg: avgStat.agi,
        },
        {
            subject: 'int',
            hero: hero.base_int,
            avg: avgStat.int,
        },
    ]

    const data2 = [
        {
            subject: 'str gain',
            hero: hero.str_gain,
            avg: avgStat.strGain,
        },
        {
            subject: 'agi gain',
            hero: hero.agi_gain,
            avg: avgStat.agiGain,
        },
        {
            subject: 'int gain',
            hero: hero.int_gain,
            avg: avgStat.intGain,
        },
    ]
    // console.log(rankUrl[0])
    var winRateAll = [];
    for(let i = 1; i<=8 ;i++){
        const winRate = (hero[i+'_win']/hero[i+'_pick']*100).toFixed(2);
        winRateAll.push(winRate);
    }

    return <>

        <div className="columns is-gapless" style={{ textAlign: 'center' }}>
            <div className="column">
                <img alt="hero-icon" src={imgBaseUrl + hero.icon} />
                <h1 className="has-text-white title is-1">{hero.localized_name}</h1>
                <img className="hero-img-status" alt="hero-img" src={imgBaseUrl + hero.img} />
                <div className="columns" >
                    <div className="column" >
                        <p className="has-text-white title is-4">STR</p>
                        <p className="has-text-white subtitle is-6 block">{hero.base_str}</p>
                        <p></p>
                        <p className="has-text-white title is-4">STR Gain</p>
                        <p className="has-text-white subtitle is-6 block">{hero.str_gain}</p>
                        <p></p>
                        <p className="has-text-white title is-5">Atk Range</p>
                        <p className="has-text-white subtitle is-6">{hero.attack_range}</p>
                    </div>
                    <div className="column">
                        <p className="has-text-white title is-4">AGI</p>
                        <p className="has-text-white subtitle is-6">{hero.base_agi}</p>
                        <p></p>
                        <p className="has-text-white title is-4">AGI Gain</p>
                        <p className="has-text-white subtitle is-6">{hero.agi_gain}</p>
                        <p></p>
                        <p className="has-text-white title is-5">Atk Rate</p>
                        <p className="has-text-white subtitle is-6">{hero.attack_rate}</p>
                    </div>
                    <div className="column">
                        <p className="has-text-white title is-4">INT</p>
                        <p className="has-text-white subtitle is-6">{hero.base_int}</p>
                        <p></p>
                        <p className="has-text-white title is-4">INT Gain</p>
                        <p className="has-text-white subtitle is-6">{hero.int_gain}</p>
                        <p></p>
                        <p className="has-text-white title is-5">MM Speed</p>
                        <p className="has-text-white subtitle is-6">{hero.move_speed}</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <RadarChart cx="50%" cy="60%" outerRadius="80%" width={400} height={350} data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'white' }} />
                    {/* <PolarRadiusAxis angle={90} domain={[0, 'auto']} /> */}
                    <Radar name={hero.localized_name} dataKey="hero" stroke="#ff1500" fill="#ff1500" fillOpacity={0.6} />
                    <Radar name={`Avg ${hero.primary_attr} hero`} dataKey="avg" stroke="#2702b9" fill="#2702b9" fillOpacity={0.3} />
                    <Legend verticalAlign="top" />
                </RadarChart>
                <RadarChart cx="50%" cy="50%" outerRadius="90%" width={400} height={350} data={data2}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'white' }} />
                    {/* <PolarRadiusAxis angle={90} domain={[0, 'auto']} /> */}
                    <Radar name={hero.localized_name} dataKey="hero" stroke="#ff1500" fill="#ff1500" fillOpacity={0.6} />
                    <Radar name={`Avg ${hero.primary_attr} hero`} dataKey="avg" stroke="#2702b9" fill="#2702b9" fillOpacity={0.3} />

                </RadarChart>
            </div>
            <div className="column">
            <h1 className="has-text-white title is-4">Winning Probability</h1>
                <div className="columns" >
                    <div className="column">
                        <img className="rank-img" alt='rank-img' src={rankUrl.herald} />
                        <h1 className="title is-5" style={winRateAll[0]>50 ? {color:'green'}: {color:'#f1240d'}}>{winRateAll[0]}%</h1>
                        <img className="rank-img" alt='rank-img' src={rankUrl.crusader} />
                        <h1 className="title is-5" style={winRateAll[2]>50 ? {color:'green'}: {color:'#f1240d'}}>{winRateAll[2]}%</h1>
                        <img className="rank-img" alt='rank-img' src={rankUrl.legend} />
                        <h1 className="title is-5" style={winRateAll[4]>50 ? {color:'green'}: {color:'#f1240d'}}>{winRateAll[4]}%</h1>
                        <img className="rank-img" alt='rank-img' src={rankUrl.divine} />
                        <h1 className="title is-5" style={winRateAll[6]>50 ? {color:'green'}: {color:'#f1240d'}}>{winRateAll[6]}%</h1>
                    </div>
                    <div className="column">
                    <img className="rank-img" alt='rank-img' src={rankUrl.guardian} />
                    <h1 className="title is-5" style={winRateAll[1]>50 ? {color:'green'}: {color:'#f1240d'}}>{winRateAll[1]}%</h1>
                    <img className="rank-img" alt='rank-img' src={rankUrl.archon} />
                    <h1 className="title is-5" style={winRateAll[3]>50 ? {color:'green'}: {color:'#f1240d'}}>{winRateAll[3]}%</h1>
                    <img className="rank-img" alt='rank-img' src={rankUrl.ancient} />
                    <h1 className="title is-5" style={winRateAll[5]>50 ? {color:'green'}: {color:'#f1240d'}}>{winRateAll[5]}%</h1>
                    <img className="rank-img" alt='rank-img' src={rankUrl.immortal} />
                    <h1 className="title is-5" style={winRateAll[7]>50 ? {color:'green'}: {color:'#f1240d'}}>{winRateAll[7]}%</h1>
                    </div>
                </div>
            </div>
        </div>


    </>

};