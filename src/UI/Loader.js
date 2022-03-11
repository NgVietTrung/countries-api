import React from 'react';
import classes from './Loader.module.css';

const Loader = (props) => {
	return <div className={`${classes.ring} ${props.className}`}></div>;
};

export default Loader;
