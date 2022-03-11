import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countryApi = createApi({
	reducerPath: 'countryApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2' }),
	endpoints: (builder) => ({
		getAllCountries: builder.query({
			query: () => `all`,
		}),
		getCountryDetail: builder.query({
			query: (countryName) => `name/${countryName}`,
		}),
	}),
});

export const { useGetAllCountriesQuery, useGetCountryDetailQuery } = countryApi;
