class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.spaceship = new Player(this, 500, 600, 50, 75);
        this.obstacles = [];
        this.bullet = [];
        this.background = undefined;
        this.score = 0;
        this.backgroundImg = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 1200;
        this.height = 700;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
        this.createObstacles();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.spaceship.move();
            console.log(this.bullet.length);
            for(let i = 0; i < this.bullet.length; i++) {
                this.bullet[i].move();
                this.bullet[i].draw();
                this.bullet[i].crashCollision(this.obstacles); 
                if (this.bullet[i].y < -5) {
                    this.bullet.splice(i, 1);
                }         
            }
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].move();
                this.obstacles[i].draw(); 
                this.spaceship.crashCollision(this.obstacles[i]);
                if (this.obstacles[i].y > 800) {
                    this.obstacles.splice(i, 1);
                } 
            }
            // this.bullet[i].crashCollision(this.obstacles[i]);
        }, 1000 / 60);
    }

    createObstacles =()=> {
        if (Math.floor(Math.random() * 10) % 2 === 0) {
            console.log("obstacle == ", this.obstacles);
            this.obstacles.push(new Obstacle(this));         
        }

        setTimeout(() => {
            this.createObstacles();
        }, 3000);
    }

    drawBackground() {
        this.backgroundImg.src = "./images/road.png";
        this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMainCharacters() {
        this.spaceship.drawComponent("./images/spaceship.png");
    }

    createBullet() {
        this.bullet.push(new Bullet((this.spaceship.x + 25), this.spaceship.y))
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
}
