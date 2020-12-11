class Ground {

    constructor(x,y,width,height) {

        var ground_options ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
        console.log(this.body);
    }
     
    display()
    {
        var pos = this.body.position;
        push();
        fill("green");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width ,this.height);
        pop();
    }

}
