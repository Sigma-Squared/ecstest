import "./App.css";
import Game from "./game/Game";

function App() {
  return (
    <div class="flex items-center justify-center w-screen h-screen">
      <div
        class="text-3xl font-bold underline bg-slate-700 rounded-lg"
        style={{ width: "1080px", height: "1080px" }}
      >
        <Game width={1080} height={1080} />
      </div>
    </div>
  );
}

export default App;
