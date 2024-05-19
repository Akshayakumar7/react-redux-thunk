import { FORM_UPDATE } from "../../action/constant/form";

const initialState = {
  text: "",
};

export default function formReducer(state = initialState, action) {
  const { type, myData } = action;
  console.log("formReducer", type, myData);
  switch (type) {
    case FORM_UPDATE: {
      state.text = myData;
      return { ...state };
    }
    default:
      return state;
  }
}
