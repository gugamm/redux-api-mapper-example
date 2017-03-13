import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import { ApiProvider } from 'redux-api-mapper';
import App             from './containers/App'
import api             from './api-mapper';
import store           from './store';

const container = document.getElementById('container');

ReactDOM.render(
  <Provider store={store}>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </Provider>,
  container
);
