import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Search from './Search.jsx';
import CardDetails from './CardDetails.jsx';


class App extends React.Component {
	render() {
		return(
				<Router>
	     		    <Route exact path="/webclient/" component={Search}/>
	  			 </Router>
			);
	}
}

export default App;
