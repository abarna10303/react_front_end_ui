import axios from "axios";
import { agriTechErrorMessage, agriTechSuccessMessage } from "./slice";

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
