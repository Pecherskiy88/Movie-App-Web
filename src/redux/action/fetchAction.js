import axios from "axios";

function getFetch(inputDate) {
  return axios.get(
    `http://api.tvmaze.com/schedule?country=US&date=${inputDate}`
  );
}

const fetchFromApi = data => ({
  type: "DOWNLOADED",
  data
});

export const asyncData = inputDate => dispatch => {
  getFetch(inputDate).then(res => dispatch(fetchFromApi(res.data)));
};
