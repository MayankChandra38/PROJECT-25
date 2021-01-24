class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0.3,
            density:0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        rotate(angle);
        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,100,100);
    }
}  