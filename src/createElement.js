import rect from './rect';

const elements = {
  rect,
};

const createElement = (type, props) => {
  if (!elements[type]) {
    throw new Error(`Unsupported type "${type}" used as a PIXI element.`);
  }
  const instance = elements[type](props);
  if (props.onClick) {
    instance.interactive = true;
    instance.on('pointerdown', props.onClick);
  }
  return instance;
};

export default createElement;
