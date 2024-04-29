const Game = ({ width, height }: { width: number; height: number }) => {
  return <canvas id="canvas" width={width} height={height}></canvas>;
};

export default Game;
