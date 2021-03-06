class Cannon{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
        this.base = loadImage("assets/cannonBase.png")
        this.img = loadImage("assets/canon.png")
    }
    display(){
        if (keyIsDown(RIGHT_ARROW)&&this.a<101.5){
            this.a = this.a + 0.02
        }
        if (keyIsDown(LEFT_ARROW)&&this.a>99.6){
            this.a = this.a - 0.02
        }
        push()
        translate(this.x, this.y)
        rotate(this.a)
        imageMode(CENTER)
        image(this.img, 0, 0, this.w, this.h)
        pop()
        image(this.base, 50, 30, 220, 200)
    }
}