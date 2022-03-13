import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ButtonComponent from './ButtonComponent/App';
import InputComponent from './InputComponent/App';

const project = process.env.REACT_APP_PROJECT;       // ButtonComponent

if(project === 'ButtonComponent') {
  ReactDOM.render(
    <React.StrictMode>
      <ButtonComponent />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else if(project === 'InputComponent') {
  ReactDOM.render(
    <React.StrictMode>
      <InputComponent />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <h1>Test</h1>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
