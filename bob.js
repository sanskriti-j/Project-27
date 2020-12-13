class Bob{
    constructor(x,y){
   var options={
   restitution: 1.2,
   friction: 0.2,
   density:1.2    
   }
   this.body=Bodies.circle(x,y,25,options)
   this.r=25
   World.add(world, this.body)
}

display(){
    var pos = this.body.position;
    fill("purple")
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y, this.r,this.r)   
}
}