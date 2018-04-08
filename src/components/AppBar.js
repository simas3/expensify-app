import React from 'react'
import AppBar from 'material-ui/AppBar'

const TopBar = (props) =>
    (
        <AppBar
            title="Expensify"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={props.handleToggle}
        />
    )


export default TopBar


