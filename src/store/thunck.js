import axios from "axios";
import { agriTechErrorMessage, agriTechSuccessMessage } from "./slice";

export const getFetchData = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:27017`);
    if (response.status === 200) {
      dispatch(agriTechSuccessMessage(response.data.data));
    }
  } catch (error) {
    dispatch(agriTechErrorMessage(error));
  }
};
