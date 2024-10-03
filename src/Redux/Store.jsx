import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import themeReduder from './Slice/themeSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const rootreducer = combineReducers({
  user: userReducer,
  theme : themeReduder
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootreducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export const persistor = persistStore(store);
