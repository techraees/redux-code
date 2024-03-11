import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import store from "./store/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <h1
      style={{ cursor: "pointer" }}
      onClick={() =>
        store.dispatch({
          type: "bugAdded",
          payload: {
            description: "New Added",
          },
        })
      }
    >
      Hello
    </h1>
  );
}

export default App;
