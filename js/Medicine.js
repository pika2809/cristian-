class Medicine{
    constructor(x,y,width,height){
        var option ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.image = loadImage("med3.png");
        this.width = 70;
        this.height = 30;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);
    }

}