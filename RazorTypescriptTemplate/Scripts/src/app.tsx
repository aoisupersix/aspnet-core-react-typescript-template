import React, { ReactElement } from "react";
import { createRoot } from "react-dom/client";

const App = (): ReactElement => {
  return <div>Hello Typescript!</div>;
};

const container = document.querySelector("#app");
if (container === null) {
  throw new Error("React root container(#app) not found.");
}
const root = createRoot(container);
root.render(<App />);
