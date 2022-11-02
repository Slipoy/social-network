import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import user1 from "./img/photo_2022-10-06_12-19-26.jpg";
import user2 from "./img/photo_2022-10-06_12-19-26.jpg";
import user3 from "./img/photo_2022-10-06_12-19-26.jpg";
import user4 from "./img/photo_2022-10-06_12-19-26.jpg";
import user5 from "./img/photo_2022-10-06_12-19-26.jpg";
import user6 from "./img/photo_2022-10-06_12-19-26.jpg";
import store from "./Redux/redux-sore";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>

    </React.StrictMode>
);



// renderDOM(store.getState())
// // store.subscribe(renderDOM)
// store.subscribe(()=>{
//     let state = store.getState();
//     renderDOM(state)
// })