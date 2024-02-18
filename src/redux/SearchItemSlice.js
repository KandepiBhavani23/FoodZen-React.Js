import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchText: "",
};

const SearchItemSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		handleSearch: (state, action) => {
			state.searchText = action.payload;
		},
	},
});

export const { handleSearch } = SearchItemSlice.actions;

export default SearchItemSlice.reducer;
