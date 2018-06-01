import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Chart from './components/Chart';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Chart />, document.getElementById('chart-root'));
registerServiceWorker();
