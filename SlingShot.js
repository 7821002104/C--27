class SlingShot{
constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,
length:0.8

}   
this.slingShot=Constraint.create(options);
World.add(world,this.slingShot)
}

display(){
 var pointA=this.slingShot.pointA.position
 var pointB=this.slingShot.pointB.position
 
 line(pointA.x,pointA.y,pointB.x,pointB.y)
 
}


}