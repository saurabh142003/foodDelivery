// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './UserSlice' // Adjust the path to your root reducer
import { version } from 'mongoose';
import storage from "redux-persist/lib/storage"
import {persistReducer ,persistStore} from 'redux-persist'
const rootReducer = combineReducers({user:userSlice})
const persistConfig = {
  key:'root',
  storage,
  version:1
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false,
  })
});



export const persistor = persistStore(store)
