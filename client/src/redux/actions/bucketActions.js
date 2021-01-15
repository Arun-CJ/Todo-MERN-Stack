import axios from "axios";
import {
    GET_ALL_BUCKETS
} from "../actions/types";

// Get Bucket List
export const getAllBuckets = () => dispatch => {
  axios
    .get("/api/bucket")
    .then((res) => {
        dispatch({
            type: GET_ALL_BUCKETS,
            payload: res.data
        })
    })
    .catch((err) => {
      const { message } = err && err.response.data;
      alert(message);
    });
};

// Create Bucket
export const createBucket = (bucketData, history) => (
    dispatch
  ) => {
        axios
        .post("/api/bucket", bucketData)
        .then((res) => {
            const { message } = res.data;
            dispatch(getAllBuckets());
            alert(message);
            history.push("/");
        })
        .catch((err) => {
            const { message } = err && err.response.data;
            alert(message);
        });
};
