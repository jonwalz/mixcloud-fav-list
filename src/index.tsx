import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './pages/app'
import { store } from './redux/store'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
