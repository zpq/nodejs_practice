export const incrementCount = function({dispatch, state}) {
    dispatch("INCREMENT", 1);
}

export const decrementCount = function({dispatch, state}) {
    dispatch("DECREMENT", 1);
}
