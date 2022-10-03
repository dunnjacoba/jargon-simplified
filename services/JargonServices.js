import axios from "axios";

const endpoint = "http://localhost:5001";

const getAllJargon = () => {
  const config = {
    method: "GET",
    url: `${endpoint}/jargon`,
    headers: { "Content-type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

const jargonServices = { getAllJargon };

export default jargonServices;
