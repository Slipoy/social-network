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
import state from "./Redux/state";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App appState={state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
