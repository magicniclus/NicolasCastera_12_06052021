import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AverageDuration = () => {
    
    
    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
            <LineChart
                width={500}
                height={300}
                // data={alldata}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default AverageDuration;