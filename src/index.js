import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './createStore/Store'
import {Provider} from 'react-redux'
const store=Store()
console.log(store.getState())
store.subscribe(()=>{
  console.log(store.getState())
})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
