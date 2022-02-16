import React, { useState, useEffect } from 'react';
import { userInformation, userActivity } from '../service/datamanager';

const Dashboard = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [old, setOld] = useState(null)
    const [activity, setActivity] = useState([])

    const valid = async () => {
        const dataUser = await userInformation()
        const dataAtivity = await userActivity();
        setName(dataUser.firstName)
        setLastName(dataUser.lastName)
        setOld(dataUser.age)
        setActivity(dataAtivity)
        setLoading(true);
    }

    useEffect(() => {
        valid()
    }, [])

    const makeActivityDay = (activity.map((act) =>
        <h2 key={act.day}>{act.day}</h2>
    ))

    const makeActivityKilogram = (activity.map((act) =>
        <h2 key={act.day}>{!loading ? 'Loading...' : act.kilogram}</h2>
    ))

    const makeActivitycalories = (activity.map((act) =>
        <h2 key={act.day}>{!loading ? 'Loading...' : act.calories}</h2>
    ))

    return (
        <main className="main">
            <header></header>
            <section >
                <h1>{!loading ? 'Loading...' : name}</h1>
                <h2>{!loading ? 'Loading...' : old}</h2>
                <h2>{!loading ? 'Loading...' : lastName}</h2>
                {makeActivityDay}
                {makeActivityKilogram}
                {makeActivitycalories}
            </section>
        </main>
    );

};

export default Dashboard;