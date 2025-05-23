import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PersonalProfile from './personal-profile';
import Employment from './empoyment-profile';
import Compensation from './compensation';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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
          <Tab label="Personal" {...a11yProps(0)} />
          <Tab label="Employment" {...a11yProps(1)} />
          <Tab label="Compensation" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PersonalProfile/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Employment/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Compensation></Compensation>
      </CustomTabPanel>
    </Box>
  );
}

