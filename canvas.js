let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let cw = window.innerWidth - 100;
let ch = window.innerHeight - 100;

canvas.width = cw;
canvas.height = ch;

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

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    ctx.fillStyle = "rgba(255,0,0,0.35)";
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

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
