import React from 'react'
import './CountryDetails.scss'

import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useAppDispatch } from '../../hooks/useAppDispach';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchCountryByName } from '../../redux/slices/countrySlice';


const CountryDetails = ({countryName}) => {

  const dispatch = useAppDispatch();
  const country= useAppSelector(
    (state) => state.countries.selectedCountry
  );


  useEffect(() => {
    dispatch(fetchCountryByName(countryName));
  }, [dispatch]);


  return (
   <>
  <Grid container spacing={2}>
                      <Grid item xs={4} md={6}>
                      <img className="main-image" alt="img" src="https://flagcdn.com/gs.svg" />
                     </Grid>
                     <Grid item xs={8} md={6}>
                            <h4>{countryName}</h4>
                          

                            <b>Capital</b> : {country.capital}
                            <br/>
                            <b>Population</b> : {country.population}
                     </Grid>
        </Grid>
   </>
  )
}
export default CountryDetails