class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 11
        }
        this.pointB= pointB
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }
        fly() {
         this.throw.bodyA = null
        }
        
    display(){
        if(this.throw.bodyA){
            
       var pointA = this.throw.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
}