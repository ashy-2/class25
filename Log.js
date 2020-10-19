class Log extends baseclass{
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle);
      this.image=loadImage("sprites/wood.png");
      Matter.Body.setAngle(this.body.angle);
      
    }
    display(){
      super.display();
    }
  }
  