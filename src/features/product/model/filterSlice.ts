import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IFilter {
  minPrice: string;
  maxPrice: string;
  category: string;
  searchTerm: string;
}

const initialState: IFilter = {
  minPrice: "",
  maxPrice: "",
  category: "",
  searchTerm: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    initializeFilter: (state, { payload }: PayloadAction<Partial<IFilter>>) => {
      return { ...state, ...payload };
    },
    handleChangeFilter: (
      state,
      { payload }: PayloadAction<{ key: keyof IFilter; value: string }>
    ) => {
      // state[payload.key] = payload.value as never;
      return { ...state, [payload.key]: payload.value };
    },
    onReset: () => {
      return initialState;
    },
  },
});

export const { initializeFilter, handleChangeFilter, onReset } =
  filterSlice.actions;

export default filterSlice.reducer;
