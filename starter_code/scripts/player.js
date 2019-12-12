class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
        this.life = 3;

    }
    move() {
        document.onkeydown = event => {
            const key = event.keyCode;
            const possibleKeystrokes = [32, 37, 65, 38, 87, 39, 83, 40, 68];
            if (possibleKeystrokes.includes(key)) {
                event.preventDefault();
                switch (key) {
                    case 37:
                    case 65:
                        if (this.x >= 10) this.x -= 20;
                        break;
                    // case 38:
                    // case 87:
                    //     if (this.y >= 10) this.y -= 20;
                    //     break;
                    case 39:
                            if (this.x <= 990 - this.width) this.x += 20;
                            break;
                    case 32:
                            this.game.createBullet();
                            break;
                    // case 40:
                    // case 68:
                    //     if (this.y <= 690 - this.height) this.y += 20;
                    //     break;
                }
            }
        };
    }
    
// let bullet= this.ctx.fillStyle = "red";

    // shooting(ele) {
//         if (
//             (this.y + 10 < ele.y + ele.height &&
//                 this.x + 15 < ele.x + ele.width &&
//                 this.x + this.width - 15 > ele.x) ||
//             (ele.y + ele.height > this.y &&
//                 ele.x < this.x + this.width &&
//                 this.x < elem.x + ele.width)
//         ) {
//             setTimeout(() => alert("crash"), 5);
//             window.location.reload();
//         }
//     }
// }

    
    crashCollision(ele) {
        if (
            (this.y + 10 < ele.y + ele.height &&
                this.x + 15 < ele.x + ele.width &&
                this.x + this.width - 15 > ele.x) ||
            (ele.y + ele.height > this.y &&
                ele.x < this.x + this.width &&
                this.x < ele.x + ele.width)
        ) {
            setTimeout(() => alert("crash"), 5);
            window.location.reload();
        }
    }
}
    // draw() {
    //     this.img.src = "./images/laser-beam.png";
    //     this.game.ctx.drawImage(
    //         this.img,
    //         this.x,
    //         this.y,
    //         this.width,
    //         this.height
    //     );
    // }