import React from 'react'
import './HomePage.scss'
import About from '../../components/About/About'
import CountryList from '../../components/CountryList/CountryList';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const HomePage = () => {
  return (
   <>
  <div className="bread-crumps" role="presentation">
    <Breadcrumbs aria-label="breadcrumps">
      <Typography sx={{ color: 'text.primary' }}>Home</Typography>
    </Breadcrumbs>
  </div>
    <About/>
   <CountryList />
   </>
  )
}
export default HomePage