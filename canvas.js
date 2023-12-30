let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let cw = window.innerWidth - 100;
let ch = window.innerHeight - 100;

canvas.width = cw;
canvas.height = ch;

let colors = [
  "rgb(255, 0, 0, 0.35)",
  "rgba(128, 0, 128, 0.35)",
  "rgba(255, 255, 0, 0.35)",
  "rgba(0, 0, 255, 0.35)",
  "rgba(255, 165, 0, 0.35)",
  "rgba(255, 99, 71, 0.35)",
  "rgba(0, 255, 255, 0.35)",
  "rgba(255, 0, 255, 0.35)",
  "rgba(0, 255, 0, 0.35)",
  "rgba(0, 0, 128, 0.35)",
  "rgba(0, 128, 128, 0.35)",
  "rgba(240, 255, 255, 0.35)",
  "rgba(255, 228, 196, 0.35)",
  "rgba(0, 0, 0, 0.35)",
  "rgba(138, 43, 226, 0.35)",
  "rgba(165, 42, 42, 0.35)",
  "rgba(127, 255, 0, 0.35)",
  "rgba(220, 20, 60, 0.35)",
  "rgba(255, 215, 0, 0.35)",
  "rgba(240, 230, 140, 0.35)",
  "rgba(205, 92, 92, 0.35)",
  "rgba(255, 105, 180, 0.35)",
  "rgba(144, 238, 144, 0.35)",
  "rgba(250, 250, 210, 0.35)",
  "rgba(255, 160, 122, 0.35)",
  "rgba(135, 206, 250, 0.35)",
  "rgba(32, 178, 170, 0.35)",
  "rgba(72, 209, 204, 0.35)",
  "rgba(255, 69, 0, 0.35)",
  "rgba(221, 160, 221, 0.35)",
  "rgba(106, 90, 205, 0.35)",
  "rgba(0, 255, 127, 0.35)",
  "rgba(245, 245, 245, 0.35)",
  "rgba(154, 205, 50, 0.35)",
  "rgba(64, 224, 208, 0.35)",
];

// ***********************************
// first baby steps of learning canvas
// in this section we created multiple lines
// drawn from random positions based on window width and height.
// ***********************************

// let count = 1000;
// let startX = Math.round(Math.random() * window.innerWidth);
// let startY = Math.round(Math.random() * window.innerHeight);
// let incX = Math.round(Math.random() * 50);
// let incY = Math.round(Math.random() * 50);
// let colors = [
//   "red",
//   "purple",
//   "yellow",
//   "blue",
//   "orange",
//   "tomato",
//   "cyan",
//   "fuchsia",
//   "lime",
//   "navy",
//   "teal",
//   "azure",
//   "bisque",
//   "black",
//   "blueviolet",
//   "brown",
//   "chartreuse",
//   "crimson",
//   "gold",
//   "khaki",
//   "indianred",
//   "hotpink",
//   "lightgreen",
//   "lightgoldenrodyellow",
//   "lightsalmon",
//   "lightskyblue",
//   "lightseagreen",
//   "mediumturquoise",
//   "orangered",
//   "plum",
//   "slateblue",
//   "springgreen",
//   "whitesmoke",
//   "yellowgreen",
//   "turquoise",
// ];
// for (let i = 0; i < count; i++) {
//   ctx.beginPath();
//   ctx.moveTo(
//     startX * Math.round(Math.random() * 15),
//     startY * Math.round(Math.random() * 15)
//   );
//   ctx.lineTo(
//     incX * Math.round(Math.random() * 15),
//     incY * Math.round(Math.random() * 15)
//   );
//   ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
//   ctx.stroke();
// }

// ***********************************
// next we start animating
// created an object instance,
// and by using loops
// drew multiple dynamic sircles with random stats
// ***********************************

// let x = Math.random() * cw;
// let y = Math.random() * ch;
// let dx = (Math.random() - 0.5) * 10;
// let dy = (Math.random() - 0.5) * 10;
// let r = 30;
// ctx.beginPath();
// ctx.arc(x, y, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "blueviolet";
// ctx.stroke();

function Circle(x, y, dx, dy, radius, colorFillStyle) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.colorFillStyle = colorFillStyle;

  this.draw = function () {
    ctx.fillStyle = colorFillStyle;
    ctx.strokeStyle = "blueviolet";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };

  this.update = function () {
    // engine
    this.x += this.dx;
    this.y += this.dy;

    // bounce off edges
    if (this.x + this.radius > cw || this.x + this.radius <= 50) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > ch || this.y + this.radius <= 50) {
      this.dy = -this.dy;
    }
    this.draw();
  };
}

let circleArray = [];

for (let i = 0; i < 100; i++) {
  let radius = 30;
  let x = Math.random() * (cw - radius * 2) + radius;
  let y = Math.random() * (ch - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 5;
  let dy = (Math.random() - 0.5) * 5;
  let colorFillStyle = colors[Math.floor(Math.random() * colors.length)];

  circleArray.push(new Circle(x, y, dx, dy, radius, colorFillStyle));
}
console.log(Math.random() * colors.length);
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
