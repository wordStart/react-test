import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/app';
import {Provider} from './component/react-redux/my-react-redux'
import {createStore} from './component/redux/my-redux'
import {counter} from './component/store/store'
let store = createStore(counter)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
