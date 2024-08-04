import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const studentsMarks = [
  
    {
      "id": 1,
      "name": "Alice",
      "marks": {
        "math": 85,
        "physics": 78,
        "chemistry": 82
      }
    },
    {
      "id": 2,
      "name": "Bob",
      "marks": {
        "math": 78,
        "physics": 74,
        "chemistry": 80
      }
    },
    {
      "id": 3,
      "name": "Charlie",
      "marks": {
        "math": 92,
        "physics": 88,
        "chemistry": 90
      }
    },
    {
      "id": 4,
      "name": "David",
      "marks": {
        "math": 74,
        "physics": 70,
        "chemistry": 75
      }
    },
    {
      "id": 5,
      "name": "Eve",
      "marks": {
        "math": 88,
        "physics": 85,
        "chemistry": 87
      }
    },
    {
      "id": 6,
      "name": "Frank",
      "marks": {
        "math": 80,
        "physics": 76,
        "chemistry": 78
      }
    },
    {
      "id": 7,
      "name": "Grace",
      "marks": {
        "math": 95,
        "physics": 92,
        "chemistry": 94
      }
    },
    {
      "id": 8,
      "name": "Hank",
      "marks": {
        "math": 70,
        "physics": 68,
        "chemistry": 72
      }
    },
    {
      "id": 9,
      "name": "Ivy",
      "marks": {
        "math": 90,
        "physics": 85,
        "chemistry": 88
      }
    },
    {
      "id": 10,
      "name": "Jack",
      "marks": {
        "math": 82,
        "physics": 80,
        "chemistry": 85
      }
    }
  ]


    return (
        <div>
            <LineChart width={800} height={400} data={studentsMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"marks.math"} stroke='red'></Line>
                <Line dataKey={"marks.physics"} stroke='blue'></Line>
                <Line dataKey={"marks.chemistry"} stroke='green'></Line>
            </LineChart> 
        </div>
    );
};

export default LineCharts;