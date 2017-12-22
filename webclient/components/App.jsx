import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Search from './Search.jsx';
import CardDetails from './CardDetails.jsx';


class App extends React.Component {
	render() {
		return(
				<Router>
					<Search>
	     		    
	     		    <Route path="/webclient/details" component={CardDetails}/>
	     		    
	     		    </Search>
	  			 </Router>
			);
	}
}

export default App;
