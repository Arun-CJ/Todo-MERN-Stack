import {
    GET_ALL_BUCKETS
} from "../actions/types";

const initialState = {
  loading: false,
  bucketListData: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BUCKETS:
        return {
            ...state,
            bucketListData: action.payload,
            loading: true
        }
    default:
    return state;
  }
}
