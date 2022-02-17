import React, {useState, useEffect} from 'react';
import {
    LineChart,
    Line,
    Tooltip,
    ResponsiveContainer,
    XAxis
  } from "recharts";
import {userAverageSession} from '../service/datamanager';

const SessionDuration = () => {

    const numberOfDay = ['L ', 'M ', 'M ', 'J ', 'V ', 'S ', 'D ']

    const [loading, setLoading] = useState(false)
    const [averageSession, setAverageSession] = useState([])

    const valid = async () => {
        const dataAverageSession = await userAverageSession()
        setAverageSession(dataAverageSession)
        setLoading(true);
    }

    useEffect(() => {
        valid()
    }, [])

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
                <ResponsiveContainer width="100%" height="80%">
                    <LineChart
                    width={500}
                    height={300}
                    data={[...averageSession]}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 10
                    }}
                    >
                        <Tooltip 
                        content={customTooltip}
                        className="tooltipLineChart"
                        cursor={{
                          stroke: "rgba(0, 0, 0, 0.1)",
                        //   strokeWidth: "300%",
                          height: 100
                        }}
                        />

                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            stroke="white"
                            strokeWidth={1}
                            activeDot={{ r: 8 }}
                            dot={{ r: 0 }}
                        />
                        <XAxis name={numberOfDay}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );        
    }
};

export default SessionDuration;