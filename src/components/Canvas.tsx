import React from "react";
import { Line } from "../map/drawables/line";

export const Canvas = (props: any) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  // DEBUG, clean this up
  React.useEffect(() => {
    if (!canvasRef.current)
      return;
    const ctx = canvasRef.current.getContext("2d");
    const line = new Line(0, 0, 500, 500);
    if (ctx)
      line.draw(ctx);

    return () => {
    };
  });
  // END DEBUG, clean this up

  return (
    <canvas
      ref={canvasRef}
      style={{ top: 0, left: 0 }}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};
