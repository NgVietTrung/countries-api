import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import CountryDetail from './components/Countries/CountryDetail';
import Loader from './UI/Loader';
import classes from './App.module.css';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const darkModeHandler = () => {
		setDarkMode(!darkMode);
	};
	return (
		<div className={`${classes.app} ${darkMode ? classes.dark : ''}`}>
			<Navbar onToggle={darkModeHandler} isDarkMode={darkMode} />
			<Switch>
				<Route exact path="/">
					<Main isDarkMode={darkMode} />
				</Route>
				<Route exact path="/countries">
					<Main isDarkMode={darkMode} />
				</Route>
				<Route exact path="/country/:countryName">
					<CountryDetail isDarkMode={darkMode} />
				</Route>
				<Route exact path="/country/loader">
					<Loader isDarkMode={darkMode} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
