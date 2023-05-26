import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './calendar.css';
import './loadInitial.js';
import './onDayClick.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Router
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
