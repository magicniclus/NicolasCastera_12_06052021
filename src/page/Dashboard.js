import React, {useState, useEffect} from 'react';
import RadialBarChart from '../component/RadialBarChart';
import DailyActivity from '../component/DailyActivity';
import RadarAnalyse from '../component/RadarAnalyse';
import SessionDuration from '../component/SessionDuration';
import { globalKeyData } from '../service/datamanager';
import Title from '../component/Title';
import Vignette from '../component/Vignette';
import KeyData from '../component/KeyData';

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [calorie, setCalorie] = useState(null);
    const [protein, setProtein] = useState(null);
    const [carbohydrate, setCarbohydrate] = useState(null);
    const [lipid, setLipid] = useState(null);

    console.log(globalKeyData());

    async function isLoading(){
            const makeData = await globalKeyData();
            setCalorie(makeData.calorieCount);
            setProtein(makeData.proteinCount);
            setCarbohydrate(makeData.carbohydrateCount);
            setLipid(makeData.lipidCount);
            setLoading(true);
    }

    useEffect(()=> {
        isLoading()
    }, [])

    if(!loading){
        return(
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    } else {
        console.log(calorie, protein, carbohydrate, lipid);
        return (
            <main className="main">
                <header>
                    <nav className="navTop">
                        <img src="/img/logo.png" alt="logo du site" />
                        <ul>
                            <li>Accueil</li>
                            <li>Profil</li>
                            <li>Réglage</li>
                            <li>Comunauté</li>
                        </ul>
                    </nav>
                </header>
                <div className="container">
                    <nav className="navLeft">
                        <div className="vignetteContainer">
                            <Vignette logo="Yoga.png" />
                            <Vignette logo="Swim.png" />
                            <Vignette logo="Bike.png" />
                            <Vignette logo="Bench.png" />
                        </div>
                        <div className="copiryght"><span>Copiryght, SportSee 2020</span></div>
                    </nav>
                    <div className="bodyContainer">
                        <Title />
                        <section className='sectionLeft'>
                            <DailyActivity />
                            <div className='smallAnalyse'>
                                    <SessionDuration />
                                    <RadarAnalyse />
                                    <RadialBarChart />
                            </div>
                        </section>
                        <section className='sectionRight'>
                            <KeyData name='calorie' value={calorie + "KCal"} image='Fire.png' />
                            <KeyData name='proteines' value={protein + "g"} image='Prot.png'/>
                            <KeyData name='glucides' value={carbohydrate + "g"} image='Apple.svg'/>
                            <KeyData name='lipides' value={lipid + "g"} image='Cheeseburger.svg'/>
                        </section>
                    </div>
                    
                </div>
            </main>
        );
    }
};

export default Dashboard;