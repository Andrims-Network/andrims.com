function random(min, max, fixed) {
  return (Math.random() * (max - min) + min).toFixed(fixed);
}

function newComet(){
  this.obj = document.createElement("div");
  this.obj.classList.add("comet");
  this.obj.style.top = ((window.innerHeight * Math.random())/2)+'px';
  this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
  this.obj.style.animation = "comet " + random(5, 10, 0) + "s linear infinite";
  this.obj.style.animationDelay = random(0, 2, 2) + 's';
  var dim = random(1, 3, 0);
  this.obj.style.height = dim + 'px';
  this.obj.style.width = dim + 'px';
  document.getElementById('comet-container').appendChild(this.obj);
}
var comets = [];
for (var i = 0; i < random(20, 100, 0); i++) {
  comets.push(new newComet());
}
