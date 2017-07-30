import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import App from './containers/App';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, 
	document.getElementById('root')
);
