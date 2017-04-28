import React, { Component } from 'react';
import { addBeverage, removeBeverage } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <p>The team has enjoyed {this.props.beverageCount} drinks today!</p>
        <button onClick={() => this.props.addBeverage()} >+</button>

        <button onClick={() => this.props.removeBeverage()}>-</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    beverageCount: state.beverageCount
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addBeverage: addBeverage,
    removeBeverage: removeBeverage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
