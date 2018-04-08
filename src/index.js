import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css';
import 'react-dates/initialize';
import './styles/index.css';
import AppRouter from './routers/AppRouter'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'

const store = configureStore()

console.log(store.getState())

store.dispatch(addExpense({ description: 'Water bill', amount: 45000, createdAt: -1000 }))

store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: 1000 }))

store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: -100 }))



const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
