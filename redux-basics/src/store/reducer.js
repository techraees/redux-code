let listId = 0;

// Simple Case if-else case
export function reducerWithIfElse(state = [], action) {
  if (action.type == "bugAdded") {
    return [
      ...state,
      {
        id: ++listId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type == "bugRemoved") {
    return state.filter((bug) => bug.id !== action.payload.id);
  }

  return state;
}

// Simple Case switch case
export function reducerWithSwitchCase(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++listId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}
