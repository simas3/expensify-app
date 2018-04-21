import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { startSetExpenses } from './actions/expenses'
import 'normalize.css';
import 'react-dates/initialize';
import './styles/index.css';
import AppRouter, { history } from './routers/AppRouter'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import Loader from './components/Loader'
import { firebase } from './firebase/firebase'
import { login, logout } from './actions/auth'


const store = configureStore()


const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(app, document.getElementById('root'));
        hasRendered = true
    }
}

ReactDOM.render(<Loader />, document.getElementById('root'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            console.log(history.location.pathname)
            if (history.location.pathname === "/") {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})
registerServiceWorker();
