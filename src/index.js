import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import user1 from "./component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user2 from "./component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user3 from "./component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user4 from "./component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user5 from "./component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import user6 from "./component/main/Dialogs/icon/photo_2022-10-06_12-19-26.jpg";
import store from "./Redux/state";



const root = ReactDOM.createRoot(document.getElementById('root'));
let renderDOM = () =>{
    root.render(
        <React.StrictMode>
            <App store={store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}


renderDOM(store.getState())
store.subscribe(renderDOM)
