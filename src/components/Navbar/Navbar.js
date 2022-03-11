import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
	const toggleDarkModeHandler = () => {
		props.onToggle();
	};
	return (
		<div className={`${classes.nav} + ${props.isDarkMode ? classes.dark : ''}`}>
			<Link to="/" className={classes.link}>
				<div className={classes.title}>Where in the world?</div>
			</Link>
			<div className={classes.icon} onClick={toggleDarkModeHandler}>
				<i className="far fa-moon"></i>Dark Mode
			</div>
		</div>
	);
};

export default Navbar;
