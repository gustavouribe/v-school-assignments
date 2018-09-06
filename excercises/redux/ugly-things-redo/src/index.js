import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './view/App.js'
import './styles.css'
import store from './model'

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.getElementById('root')
)