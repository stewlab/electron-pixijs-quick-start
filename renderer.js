// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const PIXI = require('pixi.js');

window.addEventListener('DOMContentLoaded', () => {
  let bodyWidth = window.innerWidth;
  let bodyHeight = window.innerHeight;

  let app = new PIXI.Application(bodyWidth, bodyHeight);

  document.body.appendChild(app.view);

  let circle = new PIXI.Graphics();
  circle.beginFill(0x5cafe2);
  circle.drawCircle(0, 0, 80);
  circle.x = bodyWidth / 2;
  circle.y = bodyHeight / 2;

  app.stage.addChild(circle);

  // the canvas/window resize event handler
  window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
  });
});
