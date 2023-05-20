import P5 from "p5";

export default interface IDrawable {
    draw(p: P5): void;
}