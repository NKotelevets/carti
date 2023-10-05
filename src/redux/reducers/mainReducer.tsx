import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type mainState = {
  myCardActive: boolean;
};

const initialState: mainState = {
  myCardActive: false,
};

export const authReducer = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setStatusCard: (state: mainState, { payload }: any) => {
      state.myCardActive = payload;
    },
  },
});

export const { setStatusCard } = authReducer.actions;

export const selectCurrentUser = (state: RootState) => state.main;

export default authReducer.reducer;
