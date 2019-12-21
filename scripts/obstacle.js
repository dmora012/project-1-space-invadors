class Obstacle extends Component {
    constructor(game) {
        super (game,(Math.floor(Math.random() * 950)),0,50,75);
    }

    draw() {
        this.img.src = "./images/aliens.png";
        this.game.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    move() {
        if (Math.floor(Math.random() * 20) % 3 === 0) {
        //    console.log("villian");
            this.y += 5;
        }
    }
    // obstaclesBoom() {
    //     this.img.src = "./images/aliens.png";
    //     this.game.ctx.drawImage(
    //         this.img,
    //         this.x,
    //         this.y,
    //         this.width,
    //         this.height
    //     );
    // }
    // crashCollision(bullet) {
    //     for(let i = 0; i < bullet.length; i++){
    //         if((this.y < bullet[i].y + bullet[i].height &&
    //             this.x < bullet[i].x + bullet[i].width &&
    //             this.x + this.width > bullet[i].x) ||
    //         (bullet[i].y + bullet[i].height > this.y &&
    //             bullet[i].x < this.x + this.width &&
    //             this.x < bullet[i].x + bullet[i].width))
    //      { 
    //       this.game.obstacles.splice(i, 1);
    // }
    // }
    // }


}
