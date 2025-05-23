import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const LeavePieChart = ({ title, data, labels }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: ['#ecf0ff', '#36A2EB'],
                hoverBackgroundColor: ['#ecf0ff', '#36A2EB'],
            }
        ]
    };

    return (
        <div className="pie-chart-container">
            <h4>{title}</h4>
            <Pie data={chartData} />
        </div>
    );
};

export default LeavePieChart;

