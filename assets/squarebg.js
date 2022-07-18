console.log(document.getElementById('bg').offsetWidth);
function random(min, max, fixed) {
  return (Math.random() * (max - min) + min).toFixed(fixed);
}
  // animation: morph 8s ease-in-out infinite;
function freshDot(){
    this.obj = document.createElement("div");
    this.obj.classList.add("shape");
  this.obj.style.background = 'linear-gradient('
        + random(0,360,0) + 'deg, #3A506B,#3A506B)';//4F6D93
    this.obj.style.top = (document.getElementById('bg').offsetHeight * Math.random()) + 'px';
    this.obj.style.left = (document.getElementById('bg').offsetWidth * Math.random()) + 'px';
  this.obj.style.animation = "morph "+random(4,15,0)+"s ease-in-out infinite";
 this.obj.style.animationDelay = random(0,0,2)+'s';
  var reverse = random(1,2,0);
  if(reverse == 2){
    this.obj.style.animationDirection = "reverse";
  }
  var dimensions = random(150,200, 0);
    this.obj.style.height = dimensions  + 'px';
    this.obj.style.width = dimensions + 'px';
    document.getElementById('bg').appendChild(this.obj);
  }
  var dot = [];
  for(var i = 0 ; i < 3; i++ ){
    dot.push(new freshDot());
  }