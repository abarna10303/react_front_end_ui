import axios from "axios";
import {
  agriTechErrorMessage,
  agriTechSuccessMessage,
  otpLoginSuccessMessage,
} from "./slice";

const url = "http://localhost:9001";

export const getFetchData = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/getData`);
    if (response.status === 200) {
      dispatch(agriTechSuccessMessage(response.data.data));
    }
  } catch (error) {
    dispatch(agriTechErrorMessage(error));
  }
};

export const otpLogin = (mobileNo) => async (dispatch) => {
  try {
    const response = await axios.put(`${url}/otp-login`, { mobileNo });
    if (response.status === 200) {
      dispatch(agriTechSuccessMessage(response.data.data));
    }
  } catch (error) {
    dispatch(agriTechErrorMessage(error));
  }
};

export const otpLoginValidation = (otpNo, mobileNo) => async (dispatch) => {
  try {
    const response = await axios.put(`${url}/otp-login-validation`, {
      otpNo,
      mobileNo,
    });
    if (response.status === 200) {
      dispatch(otpLoginSuccessMessage(response.data.data));
    }
  } catch (error) {
    dispatch(agriTechErrorMessage(error));
  }
};
