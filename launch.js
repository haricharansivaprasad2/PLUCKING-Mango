class Launch {
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 12
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA = null; 
    }

    attach(object){
        this.launcher.bodyA = object;
    }

    display(){
        if(this.launcher.bodyA) {
            var start = this.pointB;

            var end = this.launcher.bodyA.position;
    
            line(start.x,start.y,end.x,end.y);
        }


    }
}