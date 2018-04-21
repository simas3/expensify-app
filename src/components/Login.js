import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import { Paper, RaisedButton, Card, CardMedia, ToolbarTitle, Toolbar, Slider } from 'material-ui';


export class LoginComponent extends Component {
    state = {
        zDepth: 0
    }
    handleMouseEnter = () => {
        this.setState({ zDepth: 2 })
    }

    handleMouseLeave = () => {
        this.setState({ zDepth: 0 })
    }

    render() {
        return (
            <div className="center">

                <Paper zDepth={this.state.zDepth}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave} >
                    <Toolbar style={{ "justify-content": "center" }}>
                        <ToolbarTitle style={{ fontSize: '25px' }} text="Expensify App" />
                    </Toolbar>
                    <div style={{ fontSize: '20px', textAlign: 'center', width: '100%', margin: '20px auto', padding: '20px auto' }}>
                        Track your expenses
                    </div>
                    <div style={{ width: '100%', margin: '20px auto 20px auto' }}>
                        <RaisedButton fullWidth={true} onClick={this.props.startLogin} label="Login" primary={true} />
                    </div>


                </Paper>



            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginComponent)
