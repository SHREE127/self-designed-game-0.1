

function preload(){
    
}

function setup(){
    //database= firebase.ref(database);
    var canvas = createCanvas(displayWidth,displayHeight);
    preview = new Form1();
}

function draw(){
background("white")
    preview.display();
}   

