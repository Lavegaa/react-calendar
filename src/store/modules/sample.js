import { createAction, handleActions } from "redux-actions";

//action type
const SAMPLE_ACTION = "samplemodule/SAMPLE_ACTION";
const CHANGE_ACTION = "samplemodule/CHANGE_ACTOIN";
//action creator
export const sampleAction = createAction(SAMPLE_ACTION);
export const changeAction = createAction(CHANGE_ACTION);
//initial state
const initailState = {
  sample: "sample"
};

//reducer
export default handleActions(
  {
    [SAMPLE_ACTION]: ({ sample }) => ({ sample: sample }),
    [CHANGE_ACTION]: (state, action) => {
      return { ...state, sample: action.payload };
    }
  },
  initailState
);
