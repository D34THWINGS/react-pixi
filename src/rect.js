import { Graphics } from 'pixi.js';

const Rect = ({ x = 0, y = 0, w = 50, h = 50, color = 0xDE3249 }) => {
  const graphics = new Graphics();
  graphics.beginFill(color);
  graphics.drawRect(x, y, w, h);
  graphics.endFill();
  return graphics;
};

export default Rect;
