import { createRoot } from "react-dom/client";
import { useReducer, useState } from "react/src/React";

function FunctionComponent() {
  console.log("FunctionComponent");
  const [number, setNumber] = useState(0);
  return number === 0 ? (
    <ul key="container" onClick={() => setNumber(number + 1)}>
      <li key="A">A</li>
      <li key="B" id="b">
        B
      </li>
    </ul>
  ) : (
    <ul key="container" onClick={() => setNumber(number + 1)}>
      <div key="A">A2</div>
      <div key="C">C2</div>
    </ul>
  );
}
let element = <FunctionComponent />;

const root = createRoot(document.getElementById("root"));
root.render(element);
