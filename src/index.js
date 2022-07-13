import React from 'react';
import ReactDOM from 'react-dom/client';
import AppTab from "./AppTab";
import {Provider} from 'react-redux';
import store from "./store/config";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTab />
    </Provider>
  </React.StrictMode>
);
