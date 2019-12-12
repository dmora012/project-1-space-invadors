// var canvas = document.querySelector('canvas');
// var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

ctx.fillStyle = "red";

// Our sprites container
var sprites = [];

function bullet() {
  this.x = width/2;
  this.y = height;
  this.alive = true;
  
  this.init = function() {
    // Update position
    this.y -= 5;
    sprites.push(this);
  };
  
  this.render = function() {
    if (this.alive) {
      // Render only if the bullet is alive (aka on screen)
      ctx.fillRect(this.x, this.y, 10, 10);
    }
  };
  
  this.update = function() {
    if (this.alive) {
      // update the x value only if the object is alive
      this.y -= 7;
      // if (shouldWooble) {
      //   this.y = (Math.sin(this.x) * 34) + (height / 2);
      // }

      // Check if the bullet is on screen
      if (this.y < 0) {
        this.alive = false; 
      }
    }
  };
}

function createBullet() {
  bullets = new bullet();
  bullets.init();
}

document.addEventListener('keyup', function(event) {
  // If space bar is pressed
  if (event.keyCode == 32) {
    createBullet();
  }
  event.preventDefault();
});

document.addEventListener('click', function() {
  createBullet();
});

function loop() {
  // Very simple and naive game loop
  update();
  render();
  requestAnimationFrame(loop);
}

function update() {
  // Here we update all the sprites
  // THe reverse for loop is faster
  for (var ix = sprites.length; ix--;) {
    sprites[ix].update();
  }
}

function render() {
  // Here we render all the sprites after clearing the screen
  ctx.clearRect(0, 0, width, height);
  for (var ix = sprites.length; ix--;) {
    sprites[ix].render();
  }
}

// Start the game
requestAnimationFrame(loop);