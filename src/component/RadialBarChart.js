import React, {useState, useEffect} from 'react';
import { RadialBarChart as GlobalRadial, RadialBar, Legend, ResponsiveContainer } from 'recharts';

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
    return (
        <div className="radialBarChart">
            <ResponsiveContainer width="100%" height="100%">

                <GlobalRadial
                 cx="50%"
                 cy="50%"
                 innerRadius="90%"
                 outerRadius="80%"
                 startAngle={90}
                 endAngle={360}
                 barSize={10}
                 data={data}
                >

                    <RadialBar
                        dataKey="uv"
                        radius={[8,8,8,8]}
                    />

                </GlobalRadial>
            </ResponsiveContainer>
        </div>
    );
};

export default RadialBarChart;