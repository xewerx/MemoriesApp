import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import combineReducers from './reducers'
import App from './App';
import './index.css';       

//const store = createStore(combineReducers, compose(applyMiddleware(thunk)));
const store = createStore(combineReducers, applyMiddleware(thunk));
//Thunk - Jest to dodatek (a konkretnie middleware) do Reduxa, który pozwala na wysyłanie akcji, które są funkcjami. Takie akcje nie trafiają do Twoich reducerów. Ich zadaniem jest wyemitowanie kolejnych akcji — jednej lub kilku, po pewnym czasie, asynchronicznie.
//Redux middleware to nic innego jak funkcja, która wywoływana jest pomiędzy rozgłoszeniem akcji a momentem, w którym akcja ta zostaje obsłużona przez “reducer”.


//Podlaczenie reduxa do reacta - dzieki temu dzialaja hooki i mamy dostep do globalnego stanu
ReactDOM.render(
  <Provider store={store}>  
    <App/>
  </Provider>,
  document.getElementById('root')
);


