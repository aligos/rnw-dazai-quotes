import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-native-web';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
