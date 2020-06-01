class OBSTACLE{
constructor(x,y,width,height){
    this.x=random(0,displayWidth);
    this.y=random(0,displayHeight);
    this.width=random(10,displayWidth/2);
    this.height=random(10,displayHeight/2);
    this.shapeColor=(rgb(random(0,255),random(0,255),random(0,255)));
}
}