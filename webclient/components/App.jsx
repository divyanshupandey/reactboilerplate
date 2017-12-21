import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute ,hashHistory} from 'react-router';
import Search from './Search.jsx';

injectTapEventPlugin();

class App extends React.Component {
	render() {
		return(
				<Router history = {hashHistory}>
	      			<Route path = "/" component = {Search}>
	     		    <IndexRoute component = {Search} />
		            <Route path = "/search" component = {Search} />
		            <Route path = "/movieDetails/:query" component = {MovieDetails}/>
		            <Route path = "/about" component = {About} />
		            <Route path = "/contact" component = {Contact} />
	      			</Route>
	  			 </Router>
			);
	}
}

export default App;
