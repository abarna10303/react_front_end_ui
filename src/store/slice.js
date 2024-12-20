import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  successMassege: "",
  errorMessage: "",
  otpLoginData: {},
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
      state.otpLoginData = action.payload;
    },
  },
});

export const {
  agriTechSuccessMessage,
  agriTechErrorMessage,
  otpLoginSuccessMessage,
} = agriTechSlice.actions;
export default agriTechSlice.reducer;
