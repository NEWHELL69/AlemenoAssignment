import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store.js';
import { Provider } from 'react-redux';

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }
 
  const { worker } = await import('./mocks/browser.js')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {
  root.render(
    <Router>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </Router>
  );  
});
