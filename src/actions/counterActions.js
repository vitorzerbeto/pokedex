export const TICK_ACTION = "counter/TICK";
export const INCREMENT_ACTION = "counter/INCREMENT";
export const DECREMENT_ACTION = "counter/DECREMENT";
export const RESET_ACTION = "counter/RESET";

export function tickAction({ lastUpdate, light = false }) {
  return {
    type: TICK_ACTION,
    payload: {
      lastUpdate,
      light,
    },
  };
}
