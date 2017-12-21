
import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import {Link} from 'react-router';

class Search extends React.Component {
   constructor(props) {
      super(props);
      this.state = {data:true}
      this.updateState = this.updateState.bind(this);
      }

      updateState() {
         this.setState({data:false});
      }
   render() {
      return (
        <div>
        <AppBar
          title="Omdb Search"
          iconElementRight={<span><Link to="/"><FlatButton label="Search" style={{fontSize:"50px",color:"white",marginTop:"4px"}}/></Link>
                                  <Link to="/about"><FlatButton label="About"  style={{fontSize:"50px",color:"white",marginTop:"4px"}}/></Link>
                                  <Link to="/contact"><FlatButton label="Contact"  style={{fontSize:"50px",color:"white",marginTop:"4px"}}/></Link></span>}
       />
       <main>
          {this.props.children}
        </main>
      </div>
      );
   }
}

export default Search;
