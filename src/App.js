import React from 'react';
import CounterWithRedux from './counter/counterWithRedux';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import {rootReducer} from './counter/rootReducer'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterWithRedux />
      </div>
    </Provider>    
  );
}

export default App;
