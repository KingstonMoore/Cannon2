class Ball{
    constructor(x,y,r){
        this.x = x
        this.y = y
        this.r = r
        var prop = {isStatic: true}
        this.body = Bodies.circle(this.x, this.y, this.r, prop)
        World.add(world, this.body)
        this.img = loadImage("assets/cannonball.png")
    }
    shoot(){
        //var speed = p5.Vector.fromAngle(cannon.a)
        //speed.mult(15)
       Matter.Body.setStatic(this.body,false)
        //Matter.Body.setVelocity(this.body,{x:speed.x,y:speed.y})
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.img, this.body.position.x, this.body.position.y, this.r, this.r)
        pop()
    }
}