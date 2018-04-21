import React from 'react'
import { ListItem } from 'material-ui/List'

const Logout = ({ primaryText, onClick }) => {
    return (
        <ListItem
            primaryText={primaryText}
            onClick={onClick}
            hoverColor='#eee'
        />
    )
}

export default Logout
