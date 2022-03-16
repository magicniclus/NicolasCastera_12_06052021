import React, {useState, useEffect} from 'react';
import { RadialBarChart as GlobalRadial, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { userObjectif } from '../service/datamanager';

const RadialBarChart = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const loading = async () => {
        const makeData = await userObjectif();
        setData(makeData);
        setIsLoading(true);
    }

    useEffect(()=> {
        loading();
    }, [])

    
    if(!isLoading){
        return(
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }else{
        return (
            <div className="radialBarChart">
                <h2>Score</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <GlobalRadial
                    data={[{value: data * 100}]}
                    innerRadius={80}
                    barSize={10}
                    startAngle={80}
                    endAngle={440}
                    fill={'#FF0000'}
                    >

                        <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                        />

                        <RadialBar
                        dataKey="value"
                        cornerRadius={5}
                        background
                        />
                        
                        <text
                        x="50%"
                        y="45%"
                        textAnchor="middle"
                        fontSize="26"
                        fontWeight="700"
                        fill="black"
                        >
                        {data * 100}%
                        </text>

                        <text 
                        x="50%" 
                        y="55%" 
                        textAnchor="middle" 
                        fontSize="16" 
                        fill="gray" 
                        fontWeight="500"
                        >
                        de votre objectif
                        </text>

                    </GlobalRadial>
                </ResponsiveContainer>
            </div>
        );
    }
};

export default RadialBarChart;