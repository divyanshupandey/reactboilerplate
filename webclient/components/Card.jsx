
import React from 'react';
import ReactDOM from 'react-dom'
import {Link} from 'react-router';

const styles = {
    inner_padd:{
    padding: '2px 16px'
  },
  card :{
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '100%',
    marginBottom : '10px'
},
img_style:{
  width : '60%',
  marginLeft : '20%'
}
};


class Card extends React.Component {
   constructor(props) {
      super(props);
      }

   render() {
      return (
        <div className="col-sm-4">
<div style={styles.card}>
  <img src="./images/github.png" alt="Avatar"  style={styles.img_style}/>
  <div  style={styles.inner_padd}>
    <h4><b>{this.props.repoDetails.name}</b></h4> 
    <p><b>Owner : </b>{this.props.repoDetails.owner.login}</p>
    <hr/>
    <p><b>Stars : </b>{this.props.repoDetails.stargazers_count}</p>
    <hr/>
    <p><b>Watchers : </b>{this.props.repoDetails.watchers_count}</p><hr/> 
    <p><b>Forks : </b>{this.props.repoDetails.forks_count}</p>
  </div>
</div>
</div>      );
   }
}

export default Card;
