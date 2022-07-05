import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state.js'





const root = ReactDOM.createRoot(document.getElementById('root'));
const Main = (state)=>{
  console.log("Render")
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <App data={state} addPost={store.addPost.bind(store)} tempPost={store.tempPost.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}
Main(store.getState())

store.subscribe(Main)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
