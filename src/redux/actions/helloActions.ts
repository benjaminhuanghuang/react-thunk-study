import { CHANGE_NAME } from "./helloActionTypes";

export const ChangeHelloName = (newName: string) => {
  return {
      type: CHANGE_NAME,
      payload: newName,
    }
};
