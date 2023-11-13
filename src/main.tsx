import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import { Provider } from 'react-redux';
import store from './app/redux/store.tsx';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './app/router.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router} />
      </App>
    </Provider>
  </React.StrictMode>,
);
