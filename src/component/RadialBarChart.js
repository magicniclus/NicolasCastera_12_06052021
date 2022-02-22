import React, {useState, useEffect} from 'react';
import { RadialBarChart as GlobalRadial, RadialBar, ResponsiveContainer } from 'recharts';
import { userObjectif } from '../service/datamanager';

const data = [
    {
      name: '50+',
      uv: 2.63,
      pv: 4800,
      fill: '#FF0101',
    }
];    

const style = {
    top: '50%',
    right: '35%',
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

const RadialBarChart = () => {
    const [loading, setLoading] = useState(false)
    const [objectif, setObjectif] = useState(null)

    const valid = async () => {
        const dataObjectif = await userObjectif();
        setObjectif(dataObjectif)
        setLoading(true);
    }

    useEffect(() => {
        valid()
    }, [])

    if(!loading){
        return(
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <div className="radialBarChart">
                <ResponsiveContainer width="100%" height="100%">
    
                    <GlobalRadial
                     cx="50%"
                     cy="50%"
                     innerRadius="90%"
                     outerRadius="80%"
                     startAngle={90}
                     endAngle={450}
                     barSize={10}
                     data={data}
                    >
    
                        <RadialBar
                            dataKey="uv"
                        />
    
                    </GlobalRadial>
                </ResponsiveContainer>
            </div>
        );
    }
};

export default RadialBarChart;