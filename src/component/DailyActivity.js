import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { userActivity } from '../service/datamanager';
import PropTypes from 'prop-types';

const DailyActivity = () => {
    const [loading, setLoading] = useState(false)
    const [activity, setActivity] = useState([])

    const itsLoading = async () => {
        const dataAtivity = await userActivity();
        setActivity(dataAtivity)
        setLoading(true);
    }

    useEffect(() => {
        itsLoading()
    }, [])

    function customTooltip ({active, payload}){
        if(active){
            const calorie = payload[1].value;
            const kilogram = payload[0].value
            return (
                 <div className="tooltip">
                    <span>{kilogram}Kg</span>
                    <span>{calorie}Kcal</span>
                </div> 
            )
        }
        return null;
    }
    customTooltip.propType = {
        active: PropTypes.bool.isRequired,
        kilogram: PropTypes.number.isRequired
    }

    if(!loading){
        return(
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div className="dailyActivity">
                <div className="topGraphique">
                    Ativité quotidienne
                    <div className="legende">
                        <div className='legende_poids'>
                            <span>.</span>
                            <p>Poids (kg)</p>
                        </div>
                        <div className='legende_calorie'>
                            <span></span>
                            <p>Calories brûlées (kCal)</p>
                        </div>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="80%">
                    <BarChart
                    width={835}
                    height={300}
                    data={activity}
                    margin={{
                        top: 5,
                        left: 20,
                        bottom: 5,
                    }}
                    >

                        <CartesianGrid 
                        strokeDasharray="4" 
                        vertical={false} 
                        y={2}
                        />

                        <XAxis 
                        dataKey="day" 
                        tickLine={false} 
                        dy={10}
                        fontSize={15}
                        tickFormatter={str => {
                            let newStr = str.split('-')
                            newStr = newStr[2].split('')
                            return newStr[1]
                        }}
                        />

                        <YAxis 
                        orientation="right" 
                        tickCount={3} 
                        type="number" 
                        tickLine={false} 
                        axisLine={false}
                        fontSize={15}
                        />

                        <Tooltip 
                        separator="" 
                        contentStyle={{backgroundColor: "#E60000", color:"back"}} 
                        itemStyle={{color:"white"}} 
                        content={customTooltip} 
                        />

                        <Bar 
                        dataKey="kilogram" 
                        fill="#282D30" 
                        barSize={7} 
                        radius={[8, 8, 0, 0]}
                        />

                        <Bar 
                        dataKey="calories" 
                        fill="#E60000" 
                        barSize={7} 
                        radius={[8, 8, 0, 0]}
                        />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
    
};

export default DailyActivity;