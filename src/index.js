import React from 'react';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import { Provider } from 'react-redux';
import store from './store';

import Player from '~/components/Player';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);

export default App;
