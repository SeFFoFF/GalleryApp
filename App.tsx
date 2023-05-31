import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import {Navigation} from './app/components';

export const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
