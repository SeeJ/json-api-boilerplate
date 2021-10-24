import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types';

const initialState: User | null = null;

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state: User | null, action: PayloadAction<User | null>) => {
      // eslint-disable-next-line no-param-reassign
      state = (action.payload) ? { ...action.payload } : null;
    },
    clearCurrentUser: (state: User | null) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-param-reassign
      state = null;
    },
  }
});

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
