import { configureStore } from "@reduxjs/toolkit";
import agriTechReducer from "./slice";

const store = configureStore({
  reducer: {
    agriTech: agriTechReducer,
  },
});

export default store;
