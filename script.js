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
//Bug rn is that if u move ur cursor up then the whole container goes up and particles dissapear sooner then they're supposed to. Not really an issue but if ur bored and u have time try figuring this out.
const bg = document.getElementById('part-cont');
const windowWidth = 50 + (window.innerWidth / 5);
const windowHeight = 50 + (window.innerHeight / 5);

document.body.addEventListener("mousemove", function(e) {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;
  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
//End BG Interactive

//Mouse Following
/*
const cursorSmall = document.getElementById('circle');
const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement)*/
//End Mouse Following