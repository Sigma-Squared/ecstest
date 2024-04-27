import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="flex items-center justify-center w-screen h-screen">
      <div
        class="text-3xl font-bold underline bg-sky-100 rounded-lg"
        style={{ width: "1080px", height: "1080px" }}
      >
        Hello world!
      </div>
    </div>
  );
}

export default App;
