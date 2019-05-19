import axios from "axios";

function getFetch() {
  return axios.get("http://api.tvmaze.com/schedule?country=US&date=2019-05-20");
}

const fetchFromApi = data => ({
  type: "DOWNLOADED",
  data
});

export const asyncData = () => dispatch => {
  getFetch().then(res => dispatch(fetchFromApi(res.data)));
};
