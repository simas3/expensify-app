import React from 'react';
import map from 'lodash/map'
import { List } from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import TopBar from './AppBar'
import links from '../data/linksData'
import SideBarItem from './SideBarItem'

export default class AppBarDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }


    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div>
                <TopBar handleToggle={this.handleToggle} />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}

                >
                    <List>
                        {map(links, ({ isExact, linkTo, text }, key) => {
                            return (
                                <SideBarItem
                                    isExact={isExact}
                                    linkTo={linkTo}
                                    primaryText={text}
                                    onClick={this.handleClose}
                                    key={key}
                                />
                            )
                        })}
                    </List>
                </Drawer>
            </div>
        );
    }
}