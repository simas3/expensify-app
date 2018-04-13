import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css';
import 'react-dates/initialize';
import './styles/index.css';
import AppRouter from './routers/AppRouter'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'


const store = configureStore()

console.log(process.env)




const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
