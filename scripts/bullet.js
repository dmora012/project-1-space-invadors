class Bullet {
  constructor(game,x, y) {
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
      this.hitObsticle=true;
      this.game=game;
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
    // console.log("BULLET!!!!")
  this.y -= 5;
  }

  draw() {
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

//   revertTheHitObstacle = () => {
//     this.hitObsticle = false;
// }
  crashCollision(obstacles) {
    for(let i = 0; i < obstacles.length; i++){
        if((this.y < obstacles[i].y + obstacles[i].height &&
            this.x < obstacles[i].x + obstacles[i].width &&
            this.x + this.width > obstacles[i].x) ||
        (obstacles[i].y + obstacles[i].height > this.y &&
            obstacles[i].x < this.x + this.width &&
            this.x < obstacles[i].x + obstacles[i].width))
     { 
      this.game.score ++;
      document.getElementById('score').innerHTML = "Score: "+this.game.score;
      if(this.game.score==3){
                
        setTimeout(() => alert("Restart Game"), 2);
        this.game.youWon();
        window.location.reload();
    }


      function explode(){
        this.img.src = "./images/boom.png";
       console.log(this.img);
        this.ctx.drawImage()
          this.img,
          obstacles[i].x,
          obstacles[i].y,
          this.width,
          this.height
          // this.score +=1;
          // if(this.hitObsticle==false){
          //   this.score++;
          //   this.hitObsticle=true; 
          //   // setTimeout(this.revertTheHitObstacle, 2000);
      

         
      }
      
    
      // document.getElementById('score').innerHTML = "Score: "+this.score;
        // checkStatus();
    //   function checkStatus(){
  
    //     if(this.score > 50){
    //         this.life+=1;
    //     }
    // }
      
      // setTimeout(obstacles, 2000);
      

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
