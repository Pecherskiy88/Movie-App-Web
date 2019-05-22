import axios from "axios";

function getFetch(date) {
  return axios.get(`http://api.tvmaze.com/schedule?country=US&date=${date}`);
}

const fetchFromApi = data => ({
  type: "DOWNLOADED",
  data
});

export const asyncData = date => dispatch => {
  getFetch(date).then(res => dispatch(fetchFromApi(res.data)));
};
