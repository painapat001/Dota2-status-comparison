import React from "react";
import { useModal} from "react-simple-modal-provider";
import { imgBaseUrl } from "./Constant";

function GroupHeroes(props) {

    const Heroes = props.data;
    const heroesLength = Heroes.length
    // const primaryAttr = props.primaryAttr;
    const { open} = useModal("HeroStatModal");
    const avgStr = Heroes.reduce((total, next) => total + next.base_str, 0) / heroesLength;
    const avgAgi = Heroes.reduce((total, next) => total + next.base_agi, 0) / heroesLength;
    const avgInt = Heroes.reduce((total, next) => total + next.base_int, 0) / heroesLength;
    const avgStrGain = Heroes.reduce((total, next) => total + next.str_gain, 0) / heroesLength;
    const avgAgiGain = Heroes.reduce((total, next) => total + next.agi_gain, 0) / heroesLength;
    const avgIntGain = Heroes.reduce((total, next) => total + next.int_gain, 0) / heroesLength;
    const avgStat = {
        str:avgStr,
        agi:avgAgi,
        int:avgInt,
        strGain:avgStrGain,
        agiGain:avgAgiGain,
        intGain:avgIntGain
    }
    // console.log(avgStat)

    return <div className="body-zone">
        {Heroes.map((hero, index) => {
            return (
                <img key={index} onClick={() => open({ hero: hero ,avgStat:avgStat })} className="hero-img" alt="hero-img" src={imgBaseUrl + hero.img} />
            )
        })}
    </div>
}
export default GroupHeroes

