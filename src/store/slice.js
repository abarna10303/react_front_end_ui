import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  successMassege: "",
  errorMessage: "",
};

const agriTechSlice = createSlice({
  name: "agriTechReducer",
  initialState: initialState,
  reducers: {
    agriTechSuccessMessage: (state, action) => {
      state.successMassege = action.payload;
    },
    agriTechErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { agriTechSuccessMessage, agriTechErrorMessage } =
  agriTechSlice.actions;
export default agriTechSlice.reducer;
