import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export class LoginComponent extends Component {
    render() {
        return (
            <div className="container">
                <RaisedButton onClick={this.props.startLogin} label="Login" primary={true} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginComponent)
