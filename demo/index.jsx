import React from 'react';

import { render } from '../';
import App from './app/app.component';

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./app/app.component.jsx', () => {
    console.log('test');
  });
}
