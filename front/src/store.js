import { configureStore } from '@reduxjs/toolkit';
import bookmarkSlice from './detail/bookmarkSlice';

const store = configureStore({
  reducer: {
    bookmarkReducer: bookmarkSlice.reducer,
  },
});

export default store;
