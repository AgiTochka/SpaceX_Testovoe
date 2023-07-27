import ReactDOM from 'react-dom/client'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import App from './App'
import {spaceXApi} from "./api/spaceXApi";

const reactRoot = ReactDOM.createRoot(document.getElementById('root'))
reactRoot.render(
    <ApiProvider api={spaceXApi}>
        <App/>
    </ApiProvider>
)