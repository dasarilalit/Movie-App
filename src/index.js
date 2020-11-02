import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';

import Controller from './screens/Controller';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <Controller/>,
  document.getElementById('root')
);

serviceWorker.unregister();
