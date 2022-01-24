class Tower{

    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }

        this.x = x
        this.y = y
        this.h = h
        this.w = w

        this.image = loadImage("./assets/tower.png")

        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }

    show(){
        var pos = this.body.position

        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.w,this.h)
        pop()
    }
}


