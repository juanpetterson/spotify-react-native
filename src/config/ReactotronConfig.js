import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.27' })
    .useReactNative()
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
