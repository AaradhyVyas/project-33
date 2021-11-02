class Snow {
    constructor(x, y, r) {
        var options = {
            restitution: 0.2
        }
        this.r = 10;
        this.body = Matter.Bodies.circle(x, y, this.r, options);
        //this.color=color(random(0,255), random(0,255), random(0,25));
        Matter.World.add(world, this.body);

        // snow1  = createSprite(0,0,10,10);
        // snow1.addImage(snow4img);

        // snow2  = createSprite(0,0,10,10);
        // snow2.addImage(snow5img);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(snow4img, 0,0, 40,40);
        pop();
    }

};