import axios from "axios";
import {
  agriTechErrorMessage,
  agriTechSuccessMessage,
  fetchActiveUserJobs,
  fetchAvailableWorkers,
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
export const postUserDetails = (registerState) => async (dispatch) => {
  try {
    // Debugging log to verify registerState
    console.log("Sending registerState to backend:", registerState);

    const response = await axios.post(
      `${url}/updateData`,
      registerState
      // Convert to JSON string explicitly
    );

    if (response.status === 200) {
      console.log(response.data.data, "response");
      dispatch(agriTechSuccessMessage(response.data.message));
    } else {
      console.error("Unexpected response status:", response.status);
    }
  } catch (error) {
    console.error("Error posting user details:", error);
    dispatch(agriTechErrorMessage(error));
  }
};

export const postNewJob = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/create-job`, {
      data,
    });
    if (response.status === 200) {
      dispatch(agriTechSuccessMessage(response.data.data));
    } else {
      console.error("Unexpected response status:", response.status);
    }
  } catch (error) {
    dispatch(agriTechErrorMessage(error));
  }
};

export const getActiveJobs = (createdBy, mobileNo) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${url}/get-active-job?createdBy=${createdBy}&mobileNo=${mobileNo}`
    );
    if (response.status === 200) {
      dispatch(fetchActiveUserJobs(response.data.data));
    } else {
      console.error("Unexpected response status:", response.status);
    }
  } catch (error) {
    dispatch(agriTechErrorMessage(error));
  }
};

export const getAvailableWorkers = (pincode, type) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${url}/get-available-workers?pincode=${pincode}&type=${type}`
    );
    if (response.status === 200) {
      dispatch(fetchAvailableWorkers(response.data.data));
    } else {
      console.error("Unexpected response status:", response.status);
    }
  } catch (error) {
    dispatch(agriTechErrorMessage(error));
  }
};
