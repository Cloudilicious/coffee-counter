import React, { Component } from 'react';
import UsersList from '../containers/users-list';
import UserDetail from '../containers/user-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <UsersList />
        <UserDetail />
      </div>
    );
  }
}
