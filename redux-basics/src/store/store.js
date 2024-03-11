import { createStore } from "redux";
import { reducerWithIfElse, reducerWithSwitchCase } from "./reducer";

const store = createStore(reducerWithSwitchCase);

export default store;
