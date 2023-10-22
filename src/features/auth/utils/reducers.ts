import { ReducerActionTypes, SelectableCountries } from "./enums";

export interface ReducerAction {
  type: ReducerActionTypes;
  payload?: { field: string; value: string };
}

export interface SignUpFormState {
  email: string;
  password: string;
  verifyPassword: string;
  firstName: string;
  lastName: string;
  country: SelectableCountries | "";
  cellPhone: string;
}

export interface LoginFormState {
  email: string;
  password: string;
}

export function signUpFormReducer(
  formState: SignUpFormState,
  action: ReducerAction
): SignUpFormState {
  switch (action.type) {
    case ReducerActionTypes.UPDATE:
      const { field, value } = action.payload!;
      return {
        ...formState,
        [field]: value,
      };

    case ReducerActionTypes.VALIDATE:
      return {
        ...formState,
      };

    case ReducerActionTypes.SUBMIT:
      return {
        ...formState,
      };

    default:
      console.error("ACTION TYPE NOT RECOGNIZED: ", action.type);
      return formState;
  }
}

export function loginFormReducer(
  formState: LoginFormState,
  action: ReducerAction
): LoginFormState {
  switch (action.type) {
    case ReducerActionTypes.UPDATE:
      const { field, value } = action.payload!;
      return {
        ...formState,
        [field]: value,
      };
    case ReducerActionTypes.VALIDATE:
      return {
        ...formState,
      };
    case ReducerActionTypes.SUBMIT:
      return {
        ...formState,
      };
    default:
      console.error("ACTION TYPE NOT RECOGNIZED: ", action.type);
      return formState;
  }
}
