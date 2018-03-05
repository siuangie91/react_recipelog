import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { NavLink } from 'react-router-dom';
// reducers
import rootReducer from './_reducers';
// components
import App from './_components/App';

const store = createStore(rootReducer);

store.subscribe(() => {	
	console.log('store', store.getState());
});

console.log('store', store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));