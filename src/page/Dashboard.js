import React, { useState, useEffect } from 'react';
import { userInformation, userActivity, userAverageSession } from '../service/datamanager';

const Dashboard = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [old, setOld] = useState(null)
    const [activity, setActivity] = useState([])
    const [averageSession, setAverageSession] = useState([])
    
    userAverageSession()

    const valid = async () => {
        const dataUser = await userInformation()
        const dataAtivity = await userActivity();
        const dataAverageSession = await userAverageSession()

        setName(dataUser.firstName)
        setLastName(dataUser.lastName)
        setOld(dataUser.age)
        setActivity(dataAtivity)
        setAverageSession(dataAverageSession)
        setLoading(true);
    }

    useEffect(() => {
        valid()
    }, [])

    const makeActivityDay = (activity.map((act) =>
        <div key={act.day}>
            <h2>{act.day}</h2>
            <h2>{!loading ? 'Loading...' : act.kilogram}</h2>
            <h2>{!loading ? 'Loading...' : act.calories}</h2>
        </div>
    ))

    const makeAverageSession = (averageSession.map((act)=>
        <div key={act.day}>
            <h2>{!loading ? 'Loading...' : act.day}</h2>
            <h2>{!loading ? 'Loading...' : act.sessionLength}</h2>
        </div>
        
    ))

    return (
        <main className="main">
            <header></header>
            <section >
                <h1>{!loading ? 'Loading...' : name}</h1>
                <h2>{!loading ? 'Loading...' : old}</h2>
                <h2>{!loading ? 'Loading...' : lastName}</h2>
                {makeActivityDay}
                {makeAverageSession}
            </section>
        </main>
    );

};

export default Dashboard;