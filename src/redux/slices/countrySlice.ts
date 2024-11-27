import { CountryState } from "../../types/Country";
import { QueryOptions } from "../../types/common/QueryOptions";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = process.env.REACT_APP_API_URL;
const URL = `${API_BASE_URL}/v1/countries`;

const initialState: CountryState = {
  countries: [],
  total: 0,
  loading: false,
  error: null,
  filteredCountries: [],
  selectedCountry: {
    flag: "",
    capital: "",
    population: "",
  }
};

const createQueryString = (options: QueryOptions) => {
    const params = new URLSearchParams();
    params.append("page", options.page.toString());
    params.append("pageSize", options.pageSize.toString());
    params.append("sortBy", options.sortBy);
    params.append("sortOrder", options.sortOrder);
    return params.toString();
  };
  
export const fetchAllCountries = createAsyncThunk(
    "countries/fetchAll",
    async (options: QueryOptions, { rejectWithValue }) => {
      try {
        const queryString = createQueryString(options);
        const response = await axios.get(`${URL}?${queryString}`);
        return response.data;
      } catch (error: any) {
        toast.error(
          error.response?.data?.message || "Failed to fetch countries"
        );
        return rejectWithValue(error.response?.data);
      }
    }
  );
  
  export const fetchCountryByName = createAsyncThunk(
    "countries/fetchCountryByName",
    async (countryName: string, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${URL}/${countryName}`);
        return response.data;
      } catch (error: any) {
        toast.error(
          error.response?.data?.message || "Failed to fetch products by category"
        );
        return rejectWithValue(error.response?.data);
      }
    }
  );
const countrySlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
      sortCountryByName: (state, action: PayloadAction<"asc" | "desc">) => {
        if (action.payload === "asc") {
          state.filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
        } else {
          state.filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
        }
      },
      searchCountryByName: (state, action: PayloadAction<string>) => {
        const searchQuery = action.payload.toLowerCase();
        state.filteredCountries = state.countries.filter((country) =>
          country.name.toLowerCase().includes(searchQuery)
        );
      },
      clearCountrySearch: (state) => {
        state.filteredCountries = state.countries;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchAllCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload.items;
        state.filteredCountries = action.payload.items;
        state.total = action.payload.totalCount;
        state.error = null;
      });
      builder.addCase(fetchAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
      builder.addCase(fetchCountryByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchCountryByName.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCountry = action.payload;
        state.error = null;
      });
      builder.addCase(fetchCountryByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    },
  });
  
  const countryReducer = countrySlice.reducer;
  export const { sortCountryByName, searchCountryByName, clearCountrySearch } =
  countrySlice.actions;
  export default countryReducer;
  