import { CountryDetails } from "./CountryDetails";

export type Country = {
  name: string;
  flag: string;
  capital: string;
  population: string;
};

export type CountryState = {
  countries: Country[];
  filteredCountries: Country[];
  selectedCountry: CountryDetails;
  total: number;
  loading: boolean;
  error: string | null;
};

