import React, { useState, useEffect } from 'react';
import RadialBarChart from '../component/RadialBarChart';
import DailyActivity from '../component/DailyActivity';
import RadarAnalyse from '../component/RadarAnalyse';
import SessionDuration from '../component/SessionDuration';

const Dashboard = () => {

    return (
        <main className="main">
            <header></header>
            <section >
                <DailyActivity />
                <div className='smallAnalyse'>
                    <SessionDuration />
                    <RadarAnalyse />
                    <RadialBarChart />
                </div>
            </section>
        </main>
    );

};

export default Dashboard;