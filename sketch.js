let c;
var circles = []
var attempts = 0
const MAX_ATTEMPTS = 1000
// const WORDS = ['ALIVE', "AHAHA", "FUCK"]

function preload() {
    font = loadFont("assets/AvenirLTStd-Black.otf")
}

function setup() {
    //createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth,400);
    //create circle at new random point
    let x = random(width);
    let y = random(height);
    console.log(x, y);
    c = new Circle(x, y);
    circles.push(c);
    textFont(font)
}

function draw() {
    background(0);
    // circlePack();
    stroke(255);
    // for(var i = 1; i < 4 ; i++) {
    //     // line(0, i*height/4, width, i*height/4);
    //     textSize(100);
    //     fill(255);
    //     textAlign(CENTER, CENTER);
    //     text(WORDS[i - 1], width/2, i*height/4);
    // }
        

}

function circlePack() {
    for (circle of circles) {
        circle.show();
        if (circle.growing) {
            //if the circle is growing, check if it needs to stop growing 
            if(circle.edges()) {
                circle.growing = false
            } else {
                for (other of circles) {
                    if (other != circle) {
                        let d = dist(circle.x, circle.y, other.x, other.y);
                        if (d < circle.r + other.r) {
                            circle.growing = false
                            break;
                        }
                    }
                }
            }
            circle.grow();
        }
    }
    
    pushNewCircle()
}

function pushNewCircle() {
    let x = random(width);
    let y = random(height);
    let valid = true
    for (circle of circles) {
        let d = dist(x,y, circle.x, circle.y);
        if (d < circle.r) {
            valid = false;
            break;
        }
    }
    if (valid) {
        circles.push(new Circle(x, y));
    } else {
        attempts++;
        if(attempts > MAX_ATTEMPTS) {
            print("FINISHED")
            noLoop();
        } 
    }
}


