class Bullet {
  constructor(x, y) {
      // super(game,width,height,ctx);
      // this.game = game;
      // this.x = width/2;
      // this.y = height;
      // this.sprites =[];
      // this.alive = true;
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.x = x
      this.y = y
      this.width = 2;
      this.height = 5;
  }


  move() {
  //   this.document.addEventListener('keyup', function(event) {
  //   // If space bar is pressed
  //   // if (event.keyCode == 32) {
  //     // createBullet();
  //   // }
  //   this.event.preventDefault();
  // });
  //   this.document.addEventListener('click', function() {
  //   // createBullet();
  // });
    console.log("BULLET!!!!")
  this.y -= 5;
  }

  draw() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  crashCollision(obstacles) {
    for(let i = 0; i < obstacles.length; i++){
        if((this.y < obstacles[i].y + obstacles[i].height &&
            this.x < obstacles[i].x + obstacles[i].width &&
            this.x + this.width > obstacles[i].x) ||
        (obstacles[i].y + obstacles[i].height > this.y &&
            obstacles[i].x < this.x + this.width &&
            this.x < obstacles[i].x + obstacles[i].width))
     { 
      function explode(){
        this.img.src = "./images/boom.png";
       console.log(this.img);
        this.ctx.drawImage()
          this.img,
          obstacles[i].x,
          obstacles[i].y,
          this.width,
          this.height
      }
      setTimeout(obstacles, 2000);


      //  this.img = new Image()
      //  this.img.src = "./images/boom.png";
      //  console.log(this.img);
      //   this.ctx.drawImage(
      //     this.img,
      //     obstacles[i].x,
      //     obstacles[i].y,
      //     this.width,
      //     this.height
      // );
      obstacles.splice(i, 1);
}
}
}
}




  

//   draw() {
//           this.player.x,
//           this.ctx.fillStyle = "red";
//   }

// bullet() {
//     this.init = function() {
//     this.y -= 5;
//     this.sprites.push(this);
//   };
// }

//   shoot(){
//     document.onkeydown = event => {
//         const key = event.keyCode;
//         event.preventDefault();

//         if (key==32 && this.x>=0) {
//                     this.img.src = "./images/laser-beam.png";
//                     this.game.ctx.drawImage(
//                         this.img,
//                         this.x,
//                         this.y,
//                         this.width,
//                         this.height,
//                     );
//                     this.y -= 10;
//         }
//     };
