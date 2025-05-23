// src/components/GaugeLeaveCard.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import GaugeLeave from './gaugeLeave'; 

function GaugeLeaveCard({ title, gaugeSettings, Allocated, available }) {
  return (
    <Card sx={{ 
      width: '150px', 
      mb: 2, 
      boxShadow: 3, 
      borderRadius: '10px', 
      padding: '15px', 
      backgroundColor: '#f9f9f9',
      margin: '8px'
    }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, fontSize: '18px' }}>
          {title}
        </Typography>
        <GaugeLeave settings={gaugeSettings} />
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ color: '#7d7d7d', fontWeight: 500 }}>
          Available : {available} 
          </Typography>
          <Typography variant="body1" sx={{ color: '#7d7d7d', fontWeight: 500 }}>
          Allocated: {Allocated}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default GaugeLeaveCard;


