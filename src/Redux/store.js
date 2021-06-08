import authReduser from './Reducers/authReduser';
import templateTodoReduser from './Reducers/templateReduser';
import loaderReducer from '../Redux/Reducers/loaderReducer'
import todoReduser from './Reducers/todosReducer';

import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'refreshToken'],
};
const mainReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReduser),
  templateTodo: templateTodoReduser,
  todos: todoReduser,
  loader: loaderReducer
});

const store = configureStore({
  reducer: mainReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

const exported = { store, persistor };
export default exported;
