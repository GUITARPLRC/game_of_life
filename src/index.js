import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
	
registerServiceWorker();
