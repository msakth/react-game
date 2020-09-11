import axios from "axios";

const ApiHelper = {
  getAxios: (url) => {
    return axios({
      method: "GET",
      url,
    });
  },
};

export default ApiHelper;
