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

const createNewJargon = (data) => {
  const config = {
    method: "POST",
    url: `${endpoint}/jargon`,
    data: data,
    headers: { "Content-type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

const getByJargon = (query) => {
  const config = {
    method: "GET",
    url: `${endpoint}/jargon/${query}`,
    headers: { "Content-type": "application/json" },
    crossdomain: true,
  };
  return axios(config);
};

const jargonServices = { getAllJargon, createNewJargon, getByJargon };

export default jargonServices;
