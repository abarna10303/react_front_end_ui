import axios from "axios";
import { agriTechErrorMessage, agriTechSuccessMessage } from "./slice";
import { data } from "react-router-dom";

export const getFetchData = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:9001/getData`);
    if (response.status === 200) {
      console.log(response.data.data, "response");
      dispatch(agriTechSuccessMessage(response.data.data));
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
      `http://localhost:9001/updateData`,
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
