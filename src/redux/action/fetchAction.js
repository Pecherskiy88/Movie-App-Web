import axios from "axios";

function getFetch(year, mounth, date) {
  return axios.get(
    `http://api.tvmaze.com/schedule?country=US&date=${year}-${mounth}-${date}`
  );
}

const fetchFromApi = data => ({
  type: "DOWNLOADED",
  data
});

export const asyncData = (year, mounth, date) => dispatch => {
  getFetch(year, mounth, date).then(res => dispatch(fetchFromApi(res.data)));
};
