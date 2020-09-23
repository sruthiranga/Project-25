class Paper {
    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:0.7,
            friction:0.5,
            density:1.2
        }
        this.paper = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.paper);
        this.paperImage = loadImage("paperImage.png");
        World.add(world, this.paperImage);
    }
    display(){
        var angle = this.paper.angle;
        //image(this.paperImage, x, y, r);
        push();
        //translate(this.paper.position.x, this.paper.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.paperImage, this.paper.position.x, this.paper.position.y, this.r, this.r);
        pop();
        
    }
    
}