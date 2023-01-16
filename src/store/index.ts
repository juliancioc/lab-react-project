import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducers from './index.ducks';
import Sagas from './index.sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { ...reducers },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware
  ]
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(Sagas);

export default store;
