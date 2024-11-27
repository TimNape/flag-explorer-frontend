import React from 'react'
import './CountryListPage.scss'
import CountryList from '../../components/CountryList/CountryList';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const CountryListPage = () => {
  return (
   <>
     <div className="bread-crumps" role="presentation">
    <Breadcrumbs aria-label="">
      <Typography sx={{ color: 'text.primary' }}>Countries</Typography>
    </Breadcrumbs>
  </div>

   <CountryList />
   </>
  )
}
export default CountryListPage