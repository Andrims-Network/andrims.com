function random(min, max, fixed) {
  return (Math.random() * (max - min) + min).toFixed(fixed);
}

function newComet(){
  this.obj = document.createElement("div");
  this.obj.classList.add("comet");
  this.obj.style.top = (window.innerHeight * Math.random() - window.innerHeight)+'px';
  this.obj.style.left = (window.innerWidth * Math.random() - (0.5*window.innerWidth)) + 'px';
  this.obj.style.animation = "comet " + random(5, 10, 2) + "s linear infinite";
  this.obj.style.animationDelay = random(0, 10, 2) + 's';
  var dim = random(1, 3, 0);
  this.obj.style.height = dim + 'px';
  this.obj.style.width = dim + 'px';
  document.getElementById('comet-container').appendChild(this.obj);
}
var comets = [];
for (var i = 0; i < random(100,200, 0); i++) {
  comets.push(new newComet());
}

const bg = document.getElementById('comet-container');
const windowWidth = 50 + (window.innerWidth / 5);
const windowHeight = 50 + (window.innerHeight / 5);

document.body.addEventListener("mousemove", function(e) {
  const mouseX = 1.5*e.clientX / windowWidth;
  const mouseY = 1.5*e.clientY / windowHeight;
  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});