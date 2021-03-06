// @ts-nocheck
import React, {useState, useEffect} from 'react';
import {
    LineChart,
    Line,
    Tooltip,
    ResponsiveContainer,
    XAxis
  } from "recharts";
import {userAverageSession} from '../service/datamanager';

/**
 * [SessionDuration component]
 *
 */
const SessionDuration = () => {
    /**
     * [loading state]
     *
     * @param   {boolean}  false 
     *
     */
    const [loading, setLoading] = useState(false)

    /**
     * [averageSession state]
     *
     * @return  {Array}      [return description]
     */
    const [averageSession, setAverageSession] = useState([])

    /**
     * [valid function]
     *  
     * [retrieval of userAverageSession data via the datamanager]
     */
    const valid = async () => {
        const dataAverageSession = await userAverageSession()
        setAverageSession(dataAverageSession)
        setLoading(true);
    }

    useEffect(() => {
        valid()
    }, [])

    /**
     * [customTooltip description]
     *
     * @param   {Boolean}  active 
     * @param   {Array}  payload 
     * @param   {number}  label 
     *
     * @return  {null}           [return description]
     */
    function customTooltip ({active, payload, label}) {
        if(active){
            const min = payload[0].value;
            return(
                <div className="tooltip">
                    <span>{min}min</span>
                </div>
            )
        }
        return null
    }

    if(!loading){
        return(
            <div className='loading'>
                <h1>Loading...</h1>                
            </div>
        )
    } else {
        return (
            <div className="sessionDuration">
                <div className="topGraphique">
                    <span>Durée moyenne des sessions</span>
                </div>
                <ResponsiveContainer width="100%" height="80%">
                    <LineChart
                    width={500}
                    height={300}
                    data={[...averageSession]}
                    margin={{
                        top: 10,
                        bottom: 30,
                        left: 10,
                        right: 10
                    }}
                    >

                        <Tooltip 
                        content={customTooltip}
                        className="tooltipLineChart"
                        cursor={false}
                        />

                        <defs>
                            <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
                            <stop offset="5%" stopColor="white" stopOpacity={1}/>
                            <stop offset="95%" stopColor="white" stopOpacity={0.5}/>
                            </linearGradient>
                        </defs>

                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            strokeWidth={3}
                            activeDot={{ r: 8 }}
                            dot={false}
                            stroke="url(#colorUv)"
                            activeDot={{  strokeWidth: 5, r: 3 }}
                        />

                        <XAxis axisLine={false} 
                        tickLine={false} 
                        stroke="#FFFFFF" 
                        dy={20}
                        fontSize={12}
                        tickFormatter={ str => {
                            switch(str){
                                case 0 : return "L";
                                case 1 : return"M";
                                case 2 : return"M";
                                case 3 : return"J";
                                case 4 : return"V";
                                case 5 : return"S";
                                case 6 : return"D";
                                default: return undefined;
                            }
                        }}
                        
                        />

                    </LineChart>
                </ResponsiveContainer>
            </div>
        );        
    }
};

export default SessionDuration;