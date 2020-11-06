class Ground{

    constructor(x,y,width,height){
    
        var ground_property = {
            isStatic: true
          }

          this.body = Bodies.rectangle(x,y,width,height,ground_property) 
          this.width=width
          this.height=height
          World.add(world,this.body)

    }

    display(){
    fill("brown");
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height) 

    }

}