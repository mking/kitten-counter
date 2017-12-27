import CounterActionTypes from "../constants/CounterActionTypes";

export function incrementCounter() {
  return {
    amount: 1,
    type: CounterActionTypes.INCREMENT_COUNTER
  };
}
