import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

root.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);

// reportWebVitals();