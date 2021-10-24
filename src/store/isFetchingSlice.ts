import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;

export const isFetchingSlice = createSlice({
  name: 'isFetching',
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    },
  }
});

export const { setIsFetching } = isFetchingSlice.actions;
export default isFetchingSlice.reducer;
