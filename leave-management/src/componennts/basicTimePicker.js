import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function TimeRangePicker() {
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);

  const handleStartTimeChange = (newTime) => {
    setStartTime(newTime);
  };

  const handleEndTimeChange = (newTime) => {
    setEndTime(newTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TimePicker
            label="Start Time"
            value={startTime}
            onChange={handleStartTimeChange}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  width: '150px', // Adjust width
                  '& .MuiInputBase-root': {
                    height: '30px', // Adjust height
                  },
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <TimePicker
            label="End Time"
            value={endTime}
            onChange={handleEndTimeChange}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  width: '150px', // Adjust width
                  '& .MuiInputBase-root': {
                    height: '30px', // Adjust height
                  },
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

