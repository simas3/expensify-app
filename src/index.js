import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { startSetExpenses } from './actions/expenses'
import 'normalize.css';
import 'react-dates/initialize';
import './styles/index.css';
import AppRouter from './routers/AppRouter'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import Loader from './components/Loader'

const store = configureStore()






const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(<Loader />, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(app, document.getElementById('root'));
})
registerServiceWorker();
