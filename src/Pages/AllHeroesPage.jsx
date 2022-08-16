import React from "react";
import { useLocation } from 'react-router-dom';
import GroupHeroes from "../components/GroupHeroes";
import { ModalProvider } from "react-simple-modal-provider";
import HeroStatModal from "../components/Modal";


function AllHeroesPage() {

    const location = useLocation();
    const allHeroes = location.state;
    const maxStr = Math.max(...allHeroes.map(hero => hero.base_str));
    const maxAgi = Math.max(...allHeroes.map(hero => hero.base_agi));
    const maxInt = Math.max(...allHeroes.map(hero => hero.base_int));

    // console.log(maxStr,maxAgi,maxInt)
    

    return (
        <div>
            <header>DOTA2 All Heroes</header>
            <ModalProvider value={[HeroStatModal]}>
            <div>
                <GroupHeroes data={allHeroes.filter((hero) => hero.primary_attr === "str")} />
                <GroupHeroes data={allHeroes.filter((hero) => hero.primary_attr === "agi")} />
                <GroupHeroes data={allHeroes.filter((hero) => hero.primary_attr === "int")} />
            </div>
            </ModalProvider>
        </div>
    )
}
export default AllHeroesPage