import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Trimester.css'
import BasicTabs from '../../components/TrimesterTab/BasicTabs';

const Trimester = () => {
  return (
    <>
        <div className='trimesterContainer'>
            <h1>Trimester Stages</h1>

            <div style={{marginTop: '2em'}}>
                <BasicTabs />
            </div>

        </div>
    </>
  )
}

export default Trimester