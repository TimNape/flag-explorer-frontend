import { useEffect, useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './CountryList.scss'
import { NavLink} from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispach';
import { useAppSelector } from '../../hooks/useAppSelector';
import { QueryOptions } from '../../types/common/QueryOptions';
import { fetchAllCountries } from '../../redux/slices/countrySlice';

const CountryList = () => {

  const dispatch = useAppDispatch();
  const countries = useAppSelector(
    (state) => state.countries.filteredCountries
  );

  const [sortBy] = useState<string>("nameAsc");
  const [pagination] = useState<{ page: number; limit: number }>(
    {
      page: 1,
      limit: 200,
    }
  );

  const queryOptions: QueryOptions = useMemo(() => {
    const sortByField = "byName";
    const sortOrder = sortBy.includes("Asc") ? "Ascending" : "Descending";
    return {
      page: pagination.page,
      pageSize: pagination.limit,
      sortBy: sortByField,
      sortOrder,
    };
  }, [pagination.page, pagination.limit, sortBy]);

  useEffect(() => {
    dispatch(fetchAllCountries(queryOptions));
  }, [dispatch, queryOptions]);

  return (
   <>
<div className="t-container">
                    {countries && countries.length > 0 ? (
              
<Grid container spacing={2}>
                      {countries.map((country, index) => (
                      <Grid key={index} item xs={4} md={3}>
                      <NavLink className="list-item" to={"/country/" + country.name}>
                        <img alt="img" src={country.flag} />
                        <div className="title">{country.name}</div>
                      </NavLink>
                     </Grid>
                ))}
        </Grid>
      ) : (
        <div>  No countries found.</div>
      )}
            </div>
   </>
  )
}
export default CountryList