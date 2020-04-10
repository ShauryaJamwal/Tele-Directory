import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './common/common.css';
import TeleDirectory from './TeleDirectory';

ReactDOM.render(<TeleDirectory />, document.getElementById('root'));

serviceWorker.register();
