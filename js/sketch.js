
const formResolution = 8;
const stepSize = 2;
const radius = 100;
let centerX, centerY;
let x = new Array(formResolution);
let y = new Array(formResolution);
let col;

function canvasSetup() {
    centerX = width/2; 
    centerY = height/2;

    let angle = radians(360/float(formResolution));
    for (let i=0; i<formResolution; i++){
        x[i] = cos(angle*i) * radius;
        y[i] = sin(angle*i) * radius;  
    }
    noStroke();
    fill(0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    canvasSetup();
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');

    canvasSetup();
}


function draw(){
    background(255);
    centerX += noise(10) * 0.001;
    centerY += noise(10) * 0.001;
    
    for (let i=0; i<formResolution; i++){
        x[i] += random(-stepSize,stepSize);
        y[i] += random(-stepSize,stepSize);
    }
    
    beginShape();
    curveVertex(x[formResolution-1]+centerX, y[formResolution-1]+centerY);

    for (let i=0; i<formResolution; i++){
        curveVertex(x[i]+centerX, y[i]+centerY);
    }
    curveVertex(x[0]+centerX, y[0]+centerY);
    curveVertex(x[1]+centerX, y[1]+centerY);
    endShape();
}
