import store from "./store";

export function usingStore() {
  // Detect any changes in the state
  store.subscribe(() => {
    console.log("Changes In the Store", store.getState());
  });

  const unsubscribe = store.subscribe(() => {
    console.log("Changes In the Store", store.getState());
  });
  //   We will not notify now
  unsubscribe();

  store.dispatch({
    type: "bugAdded",
    payload: {
      description: "Bug1",
    },
  });
}
