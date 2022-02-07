export interface Drawable {
  readonly draw: (ctx: CanvasRenderingContext2D) => void;
}
