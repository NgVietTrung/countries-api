import React from 'react';
import classes from './FilterCountry.module.css';

const FilterCountry = (props) => {
	const searchingHandler = (event) => {
		props.onSearch(event.target.value);
	};
	const filterHandler = (event) => {
		props.onFilter(event.target.value);
	};
	return (
		<div className={`${classes.filter}`}>
			<div className={`${classes.search} + ${props.isDarkMode ? classes.dark : ''}`}>
				<i className="fas fa-search"></i>
				<input type="text" placeholder="Search for a country..." onChange={searchingHandler} />
			</div>
			<div className={classes.select}>
				<select
					name=""
					id=""
					onChange={filterHandler}
					value={props.filter}
					className={`${props.isDarkMode ? classes.dark : ''}`}
				>
					<option value="">Filter by Region</option>
					<option value="Africa">Africa</option>
					<option value="America">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>
		</div>
	);
};

export default FilterCountry;
