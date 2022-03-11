import React from 'react';
import Country from './Country';
import classes from './Countries.module.css';
import { useGetAllCountriesQuery } from '../../services/countryApi';
import Loader from '../../UI/Loader';

const Countries = (props) => {
	const { data: listCountries, isFetching } = useGetAllCountriesQuery();

	if (isFetching) return <Loader />;
	return (
		<div className={`${classes.countries}`}>
			{listCountries?.map((country) => {
				if (country.name.includes(props.search) && country.region.includes(props.filter)) {
					return (
						<Country
							isDarkMode={props.isDarkMode}
							name={country.name}
							flag={country.flags.png}
							population={country.population}
							region={country.region}
							capital={country.capital}
						/>
					);
				}
			})}
		</div>
	);
};

export default Countries;
