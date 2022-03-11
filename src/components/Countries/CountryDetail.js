import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetCountryDetailQuery } from '../../services/countryApi';
import Loader from '../../UI/Loader';
import classes from './CountryDetail.module.css';

const CountryDetail = (props) => {
	const params = useParams();
	const { data, isFetching } = useGetCountryDetailQuery(params.countryName);

	if (isFetching)
		return (
			<Loader
				className={`${props.isDarkMode ? classes.loadingDark : classes.loadingWhite}`}
			/>
		);

	const country = data[0];

	return (
		<div className={`${classes.detail} + ${props.isDarkMode ? classes.dark : ''}`}>
			<Link
				to="/"
				className={`${classes.button} + ${props.isDarkMode ? classes['dark-btn'] : ''}`}
			>
				<i className="fas fa-arrow-left"></i>
				<span>Back</span>
			</Link>
			<div className={classes.country}>
				<div className={classes.flag}>
					<img alt="" srcSet={country.flags.png} />
				</div>
				<div className={classes.info}>
					<h2 className={classes.name}>{country.name}</h2>
					<div className={classes.more}>
						<p className={classes.des}>
							<span>Native Name: </span>
							{country.nativeName}
						</p>
						<p className={classes.des}>
							<span>Population: </span>
							{country.population}
						</p>
						<p className={classes.des}>
							<span>Region: </span>
							{country.region}
						</p>
						<p className={classes.des}>
							<span>Sub Region: </span>
							{country.subregion}
						</p>
						<p className={classes.des}>
							<span>Capital: </span>
							{country.capital}
						</p>
						<p className={classes.des}>
							<span>Top Level Domain: </span>
							{country.topLevelDomain.toString()}
						</p>
						<p className={classes.des}>
							<span>Currencies: </span>
							{country.currencies.map((x) => x.code).toString()}
						</p>
						<p className={classes.des}>
							<span>Languages: </span>
							{country.languages.map((x) => x.name).toString()}
						</p>
					</div>
					<p className={`${classes.des} + ${classes.border}`}>
						<span>Border Countries: </span>
						{country?.borders?.map((x) => (
							<div
								className={`${classes.button} + ${
									props.isDarkMode ? classes['dark-btn'] : ''
								}`}
							>
								{x}
							</div>
						))}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CountryDetail;
