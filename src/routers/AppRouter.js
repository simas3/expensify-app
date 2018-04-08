import React from 'react'
import AppBarDrawer from '../components/Drawer'
import Dashboard from '../components/Dashboard'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import Help from '../components/Help'
import NotFound from '../components/NotFound'

import '../styles/App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from '../theme/theme'


const Routes = () => (
  <BrowserRouter>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBarDrawer />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/create" component={AddExpense} />
          <Route path="/edit/:id" component={EditExpense} />
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
)


export default Routes