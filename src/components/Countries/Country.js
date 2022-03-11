import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Country.module.css';

const Country = (props) => {
	return (
		<div className={`${classes.country} + ${props.isDarkMode ? classes.dark : ''}`}>
			<div className={classes.flag}>
				<Link to={`/country/${props.name}`}>
					<img alt="" srcSet={props.flag} />
				</Link>
			</div>
			<div className={classes.info}>
				<div className={classes.name}>{props.name}</div>
				<div className={classes.des}>
					<span>Population:</span> {props.population}
				</div>
				<div className={classes.des}>
					<span>Region:</span> {props.region}
				</div>
				<div className={classes.des}>
					<span>Capital:</span> {props.capital}
				</div>
			</div>
		</div>
	);
};

export default Country;
