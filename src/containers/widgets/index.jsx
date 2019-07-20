import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { incrementWidget, decrementWidget } from 'store/reducers/widgets'

const mapStateToProps = ({ widgets }) => ({
  count: widgets.count,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      incrementWidget,
      decrementWidget,
    },
    dispatch
  )

export class Widgets extends React.Component {
  static propTypes = {
    count: PropTypes.number,
  }

  render() {
    return (
      <div>
        <h1>Widgets</h1>
        <p>Count: {this.props.count}</p>
        <p>
          <button onClick={this.props.incrementWidget}>Increment</button>
        </p>
        <p>
          <button onClick={this.props.decrementWidget}>Decrement</button>
        </p>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Widgets)
