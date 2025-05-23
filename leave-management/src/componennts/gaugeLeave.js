// src/components/GaugeLeave.js
import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts'; 

const GaugeLeave = ({ settings }) => {
  return (
    <Gauge
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 25,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#52b202',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    />
  );
};

export default GaugeLeave;
