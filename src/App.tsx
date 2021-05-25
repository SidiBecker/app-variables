import React from 'react';
import './App.scss';
import './reset.scss';
import { Content } from './components/Content/Content';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toggle/style.css';

function App() {
  return (
    <div className="App">
      <Content />
      <ToastContainer />
    </div>
  );
}

export default App;
