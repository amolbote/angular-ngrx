import { state, action, createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import {increment, decrement, reset } from "./counter.action";
function _counterReducer = createReducer(initialState, 
  on(increment, state => {
    return {
      ...state,
      counter : state.counter + 1
    }
  }),
on(decrement, state => {
    return {
      ...state,
      counter : state.counter - 1
    }
  }),
  on(reset, state => {
    return {
      ...state,
      counter : 0
    }
  })
  );

export function counterReducer(state, actions) {
  return _counterReducer(state, action);
}
