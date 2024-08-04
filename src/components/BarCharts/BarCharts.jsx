import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

const BarCharts = () => {

  const pagesMarks = [
    { "page": 1, "marks": 75, "name": "Introduction" },
    { "page": 2, "marks": 82, "name": "Chapter 1" },
    { "page": 3, "marks": 90, "name": "Chapter 2" },
    { "page": 4, "marks": 65, "name": "Chapter 3" },
    { "page": 5, "marks": 78, "name": "Chapter 4" },
    { "page": 6, "marks": 88, "name": "Chapter 5" },
    { "page": 7, "marks": 92, "name": "Chapter 6" },
    { "page": 8, "marks": 70, "name": "Chapter 7" },
    { "page": 9, "marks": 85, "name": "Chapter 8" },
    { "page": 10, "marks": 80, "name": "Chapter 9" },
    { "page": 11, "marks": 95, "name": "Chapter 10" },
    { "page": 12, "marks": 73, "name": "Appendix A" },
    { "page": 13, "marks": 89, "name": "Appendix B" },
    { "page": 14, "marks": 77, "name": "Bibliography" },
    { "page": 15, "marks": 68, "name": "Index" },
    { "page": 16, "marks": 84, "name": "Glossary" }
  ]

    return (
        <div>
            <BarChart width={500} height={400} data={pagesMarks}>
                <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={"page"} fill='red'>
                    <LabelList dataKey={"name"}></LabelList>
                </Bar>
            </BarChart>
        </div>
    );
};

export default BarCharts;