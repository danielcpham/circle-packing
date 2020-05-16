class Circle {
    x;
    y;
    r = 2;
    growing = true
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    grow() {
        if (this.growing) {
            this.r = this.r + 1;
        }
        
    }

    show() {
        stroke(255);
        noFill();
        strokeWeight(2);
        ellipse(this.x, this.y, this.r * 2);
    }

    
    edges() {
        return this.x + this.r  > width || this.x - this.r  < 0 || this.y + this.r  > height || this.y - this.r  < 0
    }
}


