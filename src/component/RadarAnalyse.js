import React, {useState, useEffect} from 'react';
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    ResponsiveContainer 
} from 'recharts';
import { radarGlobalData, radarGlobalKind } from '../service/datamanager';

const RadarAnalyse = () => {
    console.log(radarGlobalData());

    const [loading, setLoading] = useState(false);
    const [kind, setKind] = useState(null);
    const [data, setData] = useState (null)

    const itsLoading = async () => {
        const makeData = await radarGlobalData();
        setData(makeData)
        const makeKind = await radarGlobalKind();
        setKind(makeKind)
        setLoading(true);
    }

    useEffect(() => {
        itsLoading()
    }, [])

    if(!loading){
        return(
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div className="radarAnalyse">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="80%" 
                    data={data}
                    >
    
                        <PolarGrid radialLines={false}/>
    
                        <PolarAngleAxis 
                        tickFormatter={str => {
                            switch(str){
                                case 0 : return kind[1]
                                case 1 : return kind[2]
                                case 2 : return kind[3]
                                case 3 : return kind[4]
                                case 4 : return kind[5]
                                case 5 : return kind[6]
                                default: return undefined
                            }
                        }}
                        fontSize={7} 
                        stroke="white" 
                        strokeWidth={0}
                        />
    
                        <Radar 
                        name="Mike" 
                        dataKey="value"  
                        strokeWidth={0}
                        fill="#FF0000" 
                        fillOpacity={0.6} 
                        />
                        
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );
    }
};

export default RadarAnalyse;