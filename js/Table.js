class Table{
    constructor(x,y,width,height){
        var option ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.image = loadImage("table.png");
        this.width = 400;
        this.height = 500;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);
    }

}