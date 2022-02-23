import React, { useState, useEffect } from 'react';
import RadialBarChart from '../component/RadialBarChart';
import DailyActivity from '../component/DailyActivity';
import RadarAnalyse from '../component/RadarAnalyse';
import SessionDuration from '../component/SessionDuration';
import Title from '../component/Title';
import Vignette from '../component/Vignette';

const Dashboard = () => {
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
                <section className='sectionLeft'>
                    <Title />
                    <DailyActivity />
                    <div className='smallAnalyse'>
                        <SessionDuration />
                        <RadarAnalyse />
                        <RadialBarChart />
                    </div>
                </section>
                <section className='sectionRight'>

                </section>
            </div>
        </main>
    );

};

export default Dashboard;