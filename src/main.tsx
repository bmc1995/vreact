import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import { Provider } from 'react-redux';
import store from './app/redux/store.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
