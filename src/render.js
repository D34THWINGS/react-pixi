import { Application } from 'pixi.js';
import PIXIReconciler from './pixiReconciler';

const render = (element, domElement, options = {}, callback = null) => {
   if (!domElement._rootContainer) {
     console.log(domElement);
     const { w = domElement.offsetWidth, h = domElement.offsetHeight, ...otherOptions } = options || {};
     const app = new Application(w, h, otherOptions);
     domElement._rootContainer = PIXIReconciler.createContainer(app, false);
     domElement.appendChild(app.view);
   }

   return PIXIReconciler.updateContainer(element, domElement._rootContainer, null, callback);
};

export default render;
