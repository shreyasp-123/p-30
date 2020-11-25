class Particle{
    constructor(x, y, radius){
        this.body = Bodies.circle(x,y, radius, {isStatic: false})
        this.r = radius
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world, this.body)
    }
    display(){
        push()
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r)
        pop()
        
    }
}