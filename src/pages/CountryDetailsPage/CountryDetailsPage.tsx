import React from 'react'
import { useParams } from 'react-router-dom';
import './CountryDetailsPage.scss'
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { NavLink } from 'react-router-dom'

const CountryDetailsPage = () => {

  let { countryName } = useParams();

  return (
   <>
  <div className="bread-crumps" role="presentation">
    <Breadcrumbs aria-label="">
      <NavLink to="/countries">Countries</NavLink> 
      <Typography sx={{ color: 'text.primary' }}>{countryName}</Typography>
    </Breadcrumbs>
  </div>
  <h1 className="page-heading">{countryName}</h1>
  <CountryDetails countryName = {countryName}/>
   </>
  )
}
export default CountryDetailsPage