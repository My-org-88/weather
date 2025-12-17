import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import {store} from './store/configureStore.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>
)
