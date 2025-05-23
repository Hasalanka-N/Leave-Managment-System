import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import RequestLeave from './requestLeave';
import RequestShortLeave from './requestShortLeave';
import MyRequestLeave from './myLeaveRequestview';
import LeaveCoveringRequest from './coveringRequest';

function LeaveRequestTabs(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

LeaveRequestTabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, 
        borderColor: 'divider',
        position: 'sticky', 
        top: 0, 
        backgroundColor: 'background.paper',
        zIndex: 1100,
         }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Leave" {...a11yProps(0)} />
          <Tab label="Short Leave" {...a11yProps(1)} />
          <Tab label="Leave Covering Request" {...a11yProps(2)} />
          <Tab label="View Leave Request" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <LeaveRequestTabs value={value} index={0}>
        <RequestLeave/>
      </LeaveRequestTabs>
      <LeaveRequestTabs value={value} index={1}>
        <RequestShortLeave/>
      </LeaveRequestTabs>
      <LeaveRequestTabs value={value} index={2}>
        <LeaveCoveringRequest/>
      </LeaveRequestTabs>
      <LeaveRequestTabs value={value} index={3}>
        <MyRequestLeave/>
      </LeaveRequestTabs>
    </Box>
  );
}

