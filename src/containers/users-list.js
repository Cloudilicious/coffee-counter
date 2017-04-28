import React, { Component } from 'react';
import { selectUser } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UsersList extends Component {
  renderList() {
    return this.props.users.map((user) => {
      return (
        <li key={user.name}
          onClick={() => this.props.selectUser(user)}
          className="list-group-item">
          {user.name}
        </li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStatetoProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(UsersList)