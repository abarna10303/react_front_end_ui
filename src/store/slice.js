import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  successMassege: "",
  errorMessage: "",
  otpLoginData: {},
  activeUserJobs: [],
  availableWorkers: [],
  availableContractors: [],
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
    fetchActiveUserJobs: (state, action) => {
      state.activeUserJobs = action.payload;
    },
    fetchAvailableWorkers: (state, action) => {
      state.availableWorkers = action.payload;
    },
    fetchAvailableContractors: (state, action) => {
      state.availableContractors = action.payload;
    },
  },
});

export const {
  agriTechSuccessMessage,
  agriTechErrorMessage,
  otpLoginSuccessMessage,
  fetchActiveUserJobs,
  fetchAvailableWorkers,
  fetchAvailableContractors,
} = agriTechSlice.actions;
export default agriTechSlice.reducer;
