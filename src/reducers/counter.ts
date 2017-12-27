import CounterActionTypes from "../constants/CounterActionTypes";

export interface IIncrementCounterAction {
  amount: number;
  type: CounterActionTypes.INCREMENT_COUNTER;
}

export type CounterAction = IIncrementCounterAction;

export interface ICounterState {
  counter: number;
}

export default function reducer(
  state: ICounterState = { counter: 0 },
  action: CounterAction
) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT_COUNTER: {
      return { ...state, counter: state.counter + action.amount };
    }

    default: {
      return state;
    }
  }
}
