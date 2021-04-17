class Chain{
    constructor(BodyA,BodyB){
        var options={
            bodyA: BodyA,
            bodyB: BodyB,
            lenght: 10,
            stiffness: 0.04,
        
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);

    }
    display(){
        var pointA=this.body.bodyA.position;
        var pointB=this.body.bodyB.position;

        strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}