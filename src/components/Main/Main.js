import React, { useState } from 'react';
import Countries from '../Countries/Countries';
import FilterCountry from './FilterCountry';
import classes from './Main.module.css';

const Main = (props) => {
	const [searchedText, setSearchedText] = useState('');
	const [filtered, setFiltered] = useState('');
	console.log(filtered);
	const searchingHandler = (input) => {
		setSearchedText(input);
	};
	const filteredHandler = (value) => {
		setFiltered(value);
	};
	return (
		<div className={`${classes.main} + ${props.isDarkMode ? classes.dark : ''}`}>
			<FilterCountry
				onSearch={searchingHandler}
				filter={filtered}
				onFilter={filteredHandler}
				isDarkMode={props.isDarkMode}
			/>
			<Countries search={searchedText} filter={filtered} isDarkMode={props.isDarkMode} />
		</div>
	);
};

export default Main;
