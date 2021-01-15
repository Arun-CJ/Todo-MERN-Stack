import {
    GET_ALL_TODOS
} from "../actions/types";

const initialState = {
  loading: false,
  todoListData: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TODOS:
        return {
            ...state,
            todoListData: action.payload,
            loading: true
        }
    default:
    return state;
  }
}
