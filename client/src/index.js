import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { GlobalProvider } from './context/Context';
import routes from './routes/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={routes} />
    </GlobalProvider>
  </React.StrictMode>
);


