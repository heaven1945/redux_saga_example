export const INCREMENT_ASYNC = "INCREMENT_ASYNC";
export const DECREMENT_ASYNC = "DECREMENT_ASYNC";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const incrementAsync = () => ({
  type: INCREMENT_ASYNC
});

export const decrementAsync = () => ({
  type: DECREMENT_ASYNC
});

const initialState = { num: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        num: state.num + 1
      };
    case DECREMENT:
      return {
        num: state.num - 1
      };
    default:
      return state;
  }
};
