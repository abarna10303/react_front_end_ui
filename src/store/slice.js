import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  successMassege: "",
  errorMessage: "",
  otpLoginsuccessMassege: "",
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
    otpLoginSuccessMessage: (state, action) => {
      state.otpLoginsuccessMassege = action.payload;
    },
  },
});

export const {
  agriTechSuccessMessage,
  agriTechErrorMessage,
  otpLoginSuccessMessage,
} = agriTechSlice.actions;
export default agriTechSlice.reducer;
