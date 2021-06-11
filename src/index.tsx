import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Reset from './style/index'
import store from './store/index'
import { CustomProvider } from './hooks/custom-hooks';


ReactDOM.render(
    <CustomProvider store={store}>
        <Reset/>
        <App/>
    </CustomProvider>
    ,
    document.getElementById('root')
);


