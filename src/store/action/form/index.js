import * as action from "../constant/form";

export function updateText(text) {
  return {
    type: action.FORM_UPDATE,
    myData: text,
  };
}
