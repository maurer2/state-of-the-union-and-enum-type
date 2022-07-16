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

async function api(): Promise<LoadingState | ErrorState | SuccessState> {
  return loading;
}

async function fetchStuff(): Promise<void> {
  const currentState = await api();

  switch (currentState.state) {
    case "loading": {
      console.log(currentState.state);
      return;
    }
    case "error": {
      console.log(currentState.status);
      return;
    }
    case "success": {
      console.log(currentState.status);
      return;
    }
    default: {
      console.log("default", currentState);
    }
  }
}
