import HttpStatusCode from './http-enums';

type StatusCodeSuccess =
  | HttpStatusCode.OK
  | HttpStatusCode.CREATED
  | HttpStatusCode.ACCEPTED
  | HttpStatusCode.NON_AUTHORITATIVE_INFORMATION
  | HttpStatusCode.NO_CONTENT
  | HttpStatusCode.RESET_CONTENT
  | HttpStatusCode.PARTIAL_CONTENT
  | HttpStatusCode.MULTI_STATUS
  | HttpStatusCode.ALREADY_REPORTED
  | HttpStatusCode.IM_USED;

// used to discriminate between types
enum State {
  ERROR = -1,
  LOADING = 0,
  SUCCESS = 1,
}

type LoadingState = {
  state: State.LOADING;
};

type ErrorState = {
  state: State.ERROR;
  status: HttpStatusCode;
};

type SuccessState = {
  state: State.SUCCESS;
  status?: StatusCodeSuccess;
  response: string;
};

const loading: LoadingState = {
  state: State.LOADING,
};

const error: ErrorState = {
  state: State.ERROR,
  status: HttpStatusCode.BAD_REQUEST,
};

const success: SuccessState = {
  state: State.SUCCESS,
  status: HttpStatusCode.OK,
  response: 'Task failed successfully',
};

async function apiResponse(): Promise<LoadingState | ErrorState | SuccessState> {
  // https://github.com/lodash/lodash/blob/67389a8c78975d97505fa15aa79bec6397749807/lodash.js#L3875-L3886
  const randomStateNumber: number = Math.floor(Math.random() * 3);

  return [loading, error, success]?.at(randomStateNumber) ?? loading;
}

// https://learntypescript.dev/07/l8-discriminated-union
async function fetchStuff(): Promise<void> {
  const currentState: LoadingState | ErrorState | SuccessState = await apiResponse();

  switch (currentState.state) {
    case State.LOADING: {
      console.log(`State: ${currentState.state}`);
      return;
    }
    case State.ERROR: {
      console.log(`State: ${currentState.state}`);
      console.log(`Status: ${currentState.status}`);
      return;
    }
    case State.SUCCESS: {
      console.log(`State: ${currentState.state}`);
      console.log(`Status: ${currentState.status}`);
      console.log(`Response: ${currentState.response}`);

      // always false
      // if (currentState.status === HttpStatusCode.LOCKED) {}

      if (currentState.status !== HttpStatusCode.OK) {
        console.warn("Something's fishy.");
      }

      return;
    }
    default: {
      console.log('default', currentState);
    }
  }
}

fetchStuff();
