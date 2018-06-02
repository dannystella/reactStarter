import React from 'react';


class Hamburger extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      toggle: false
    }
    this.onClick = this.onClick.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    if(this.state.toggle) {
      return "open";
    }
    return '';
  }

  onClick() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {
  	return (
    <div>
      <div id = 'nav-icon1' className = {this.state.toggle ? 'open' : ''} onClick = {this.onClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>    
    </div>)
  }
}

export default Hamburger;