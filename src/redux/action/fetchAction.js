import axios from "axios";

function getFetch(year, month, day) {
  return axios.get(
    `http://api.tvmaze.com/schedule?country=US&date=${year}-${month}-${day}`
  );
}

const fetchFromApi = data => ({
  type: "DOWNLOADED",
  data
});

export const asyncData = (year, month, day) => dispatch => {
  getFetch(year, month, day).then(res => dispatch(fetchFromApi(res.data)));
};
