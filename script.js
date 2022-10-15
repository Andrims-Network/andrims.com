//Background JS
function random(min, max, fixed) {
  return (Math.random() * (max - min) + min).toFixed(fixed);
}
function newParticle() {
  this.obj = document.createElement("div");
  this.obj.classList.add("particle");
  this.obj.style.top = (2650 * Math.random()) - window.innerHeight + 'px';
  this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
  this.obj.style.animation = "animParticle " + random(20, 50, 0) + "s linear infinite";
  // this.obj.style.animationDelay = random(0, 2, 2) + 's';
  var dim = random(1, 3, 0);
  this.obj.style.height = dim + 'px';
  this.obj.style.width = dim + 'px';
  document.getElementById('particles').appendChild(this.obj);
}
var dot = [];
for (var i = 0; i < random(500, 1000, 0); i++) {
  dot.push(new newParticle());
}
//End Background JS
//Start BG Interactive

const bg = document.getElementById('part-cont');
const windowWidth = 50 + (window.innerWidth / 5);
const windowHeight = 50 + (window.innerHeight / 5);

document.body.addEventListener("mousemove", function(e) {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;
  console.log(e.clientX);
  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
//End BG Interactive

//Mouse Following
document.body.addEventListener('mousemove', function(e) {
  let circle = document.getElementById('circle');
  let left = e.offsetX;
  let top = e.offsetY;
  circle.style.left = left + 'px';
  circle.style.top = top + 'px';
});
//End Mouse Following
