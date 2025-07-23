import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineCharts = () => {
    const students = [
        { id: 1, name: "Rahim", math: 88, physics: 85, chemistry: 80 },
        { id: 2, name: "Karim", math: 75, physics: 70, chemistry: 72 },
        { id: 3, name: "Ayesha", math: 92, physics: 95, chemistry: 90 },
        { id: 4, name: "Sumaiya", math: 67, physics: 60, chemistry: 65 },
        { id: 5, name: "Jamal", math: 96, physics: 93, chemistry: 91 },
        { id: 6, name: "Tania", math: 81, physics: 79, chemistry: 83 },
        { id: 7, name: "Rafi", math: 73, physics: 75, chemistry: 70 },
        { id: 8, name: "Nusrat", math: 89, physics: 87, chemistry: 88 },
        { id: 9, name: "Hasan", math: 77, physics: 74, chemistry: 76 },
        { id: 10, name: "Sadia", math: 91, physics: 90, chemistry: 89 }
    ];

    return (
        <div>
            <div>
                <LineChart width={600} height={400} data={students}>
                    <XAxis dataKey={"name"}></XAxis>
                    <YAxis></YAxis>
                    <CartesianGrid strokeDasharray=""></CartesianGrid>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line dataKey="math" stroke='yellow'></Line>
                    <Line dataKey="physics" stroke='red'></Line>
                </LineChart>
            </div>
        </div>
    );
};

export default LineCharts;