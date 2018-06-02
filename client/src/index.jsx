import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Hamburger from './hamburger.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
    }
  }


  render () {
  	return (
    <div>
      <Hamburger />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));