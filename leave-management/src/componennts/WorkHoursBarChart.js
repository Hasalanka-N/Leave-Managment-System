import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WorkHoursBarChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Work Hours',
        data: data,
        backgroundColor: data.map(value => {
          if (value > 7) {
            return 'rgba(75, 192, 75)'; 
          } else if (value < 6.5) {
            return 'rgba(192, 75, 75)'; 
          } else {
            return 'rgba(75, 75, 192)'; 
          }
        }),
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0, 
        barThickness: 20,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 12,
        title: {
          display: false,
          //text: 'Hours Worked',
        },
        grid: {
          display: true,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Days',
        },
        grid: {
          display: false, 
        },

        ticks: {
          autoSkip: false, 
          maxRotation: 0, 
          minRotation: 0, 
          font: {
            size: 12,
          },
          padding: 10, 
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: '#fff',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        titleFont: { size: 16, weight: 'bold' },
        bodyFont: { size: 14 },
        displayColors: false,
        callbacks: {
          label: function(context) {
            return ` ${context.dataset.label}: ${context.raw} hours`;
          },
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default WorkHoursBarChart;
