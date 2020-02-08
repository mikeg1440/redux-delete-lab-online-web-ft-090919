import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.band.name} - <span><button onClick={() => this.props.deleteBand(this.props.band.id)}>Delete</button></span></li>
      </div>
    );
  }
};

export default Band;
