import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './counter';

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return <div>Select your name to get started</div>;
    }

    return (
      <div>
        <p>Hi {this.props.user.name}!</p>
        <Counter />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail)