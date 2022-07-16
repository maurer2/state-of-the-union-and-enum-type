import HttpStatusCode from "./http-enums";

type LoadingState = {
  state: "loading";
};

type ErrorState = {
  state: "error";
  status: HttpStatusCode;
};

type SuccessState = {
  state: "success";
  status?: HttpStatusCode;
  response: string;
};

const loading: LoadingState = {
  state: "loading",
};

const error: ErrorState = {
  state: "error",
  status: HttpStatusCode.BAD_REQUEST,
};

const success: SuccessState = {
  state: "success",
  status: HttpStatusCode.OK,
  response: "Task failed successfully",
};

async function apiResponse(): Promise<LoadingState | ErrorState | SuccessState> {
  // https://github.com/lodash/lodash/blob/67389a8c78975d97505fa15aa79bec6397749807/lodash.js#L3875-L3886
  const randomStateNumber: number = 0 + Math.floor(Math.random() * (2 - 0 + 1));

  return [
    loading,
    error,
    success
  ]?.at(randomStateNumber) ?? loading;
}

async function fetchStuff(): Promise<void> {
  const currentState: LoadingState | ErrorState | SuccessState = await apiResponse();

  switch (currentState.state) {
    case "loading": {
      console.log(currentState.state);
      return;
    }
    case "error": {
      console.log(currentState.state);
      console.log(currentState.status);
      return;
    }
    case "success": {
      console.log(currentState.state);
      console.log(currentState.status);
      console.log(currentState.response);
      return;
    }
    default: {
      console.log("default", currentState);
    }
  }
}

fetchStuff();
