import P5 from 'p5';
import IDrawable from "../IDrawable";

export default class Walker implements IDrawable {
    _x: number;
    _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    walk() {
        const stepX = Math.round(Math.random() * 2) - 1;
        const stepY = Math.round(Math.random() * 2) - 1;

        this._x += stepX;
        this._y += stepY;
    }

    draw(p: P5) {
        p.color('black')
        p.point(this._x, this._y);
    }
}

export const WalkerSetup = (p: P5) => {

    let walker;
    p.setup = () => {
        const canvas = p.createCanvas(800, 600);
        canvas.parent("app");
        p.background("white");

        walker = new Walker(p.width / 2, p.height / 2);
    };

    p.draw = () => {
        walker.walk();
        walker.draw(p);
    };
};