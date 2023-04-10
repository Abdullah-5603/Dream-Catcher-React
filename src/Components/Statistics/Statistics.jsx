import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
          name: 'Assignment 1',
          mark: 60,
        },
        {
          name: 'Assignment 2',
          mark: 59,
        },
        {
          name: 'Assignment 3',
          mark: 58,
        },
        {
          name: 'Assignment 4',
          mark: 60,
        },
        {
          name: 'Assignment 5',
          mark: 60,
        },
        {
          name: 'Assignment 6',
          mark: 53,
        },
        {
          name: 'Assignment 7',
          mark: 60,
        },
        {
          name: 'Assignment 8',
          mark: 60,
        },
      ];
      
    return (
        <div style={{ margin: '0 5%', width: '90%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#7771f1" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Statistics;