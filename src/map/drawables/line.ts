import { Drawable } from "../drawable";

export class Line implements Drawable {
    x1 = 0.0;
    y1 = 0.0;
    x2 = 0.0;
    y2 = 0.0;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    };
}