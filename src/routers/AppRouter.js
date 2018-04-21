import React from 'react'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import NotFound from '../components/NotFound'
import createHistory from 'history/createBrowserHistory'
import '../styles/App.css'
import { Router, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from '../theme/theme'
import PrivateRoute from './PrivateRoute'
import { PublicRoute } from './PublicRoute';

export const history = createHistory()

const Routes = () => (
  <Router history={history}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Switch>
          <PublicRoute path="/" component={Login} exact />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/create" component={AddExpense} />
          <PrivateRoute path="/edit/:id" component={EditExpense} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </Router>
)


export default Routes