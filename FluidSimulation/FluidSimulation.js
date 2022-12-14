"use strict";

var canvas;
var gl;


var flag = true;
var numElements = 1;
var points;
var gravity;



    var points = [
        vec2( -0.5, -0.5 ),
        vec2(  0,  0.5 ),
        vec2(  0.5, -0.5 )

    ];

    

    var vertexColors = [
        vec4(0.0, 0.0, 0.0, 1.0),  // black
        vec4(1.0, 0.0, 0.0, 1.0),  // red
        vec4(1.0, 1.0, 0.0, 1.0),  // yellow
        vec4(0.0, 1.0, 0.0, 1.0),  // green
        vec4(0.0, 0.0, 1.0, 1.0),  // blue
        vec4(1.0, 0.0, 1.0, 1.0),  // magenta
        vec4(1.0, 1.0, 1.0, 1.0),  // white
        vec4(0.0, 1.0, 1.0, 1.0)   // cyan
    ];

// indices of the 12 triangles that compise the cube


init();

function init()
{
    canvas = document.getElementById("gl-canvas");

    gl = canvas.getContext('webgl2');
    if (!gl) alert("WebGL 2.0 isn't available");


    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // array element buffer
    var iBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, points, gl.STATIC_DRAW);

    // color array atrribute buffer
    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW);

    var colorLoc = gl.getAttribLocation(program, "aColor");
    gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorLoc);

    // vertex array attribute buffer
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW);
    var positionLoc = gl.getAttribLocation( program, "aPosition");
    gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc );


    //event listeners for buttons

    document.getElementById("dropletButton").onclick = function(){
        points == addDrop(points);
    };

    document.getElementById("gravSlider").onclick = function (event) {
        gravity = event.target.value/10;
        document.getElementById("gravityOutput").innerHTML = " ".concat(gravity) + " m/s^2";
        console.log(gravity);
    }

    render();
}

function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLE_FAN, numElements, gl.UNSIGNED_BYTE, 0);

    requestAnimationFrame(render);
}



function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLES, 0, 6 );
}


function addDrop() {
    let points;

    //adds a drop with random coordinates
    var cX = Math.random();
    var cY = Math.random();

    //creates velocity vector   
    var vx = Math.random();
    var vy = Math.random();
    

    var center = vec2(cX, cY); 
   
    points.push(center);
    for (i = 0; i <= 100; i++){
        points.push(center + vec2(
            r*Math.cos(i * 2 * Math.PI / 200),
            r*Math.sin(i * 2 * Math.PI / 200) 
        ));
    }
    return points;
}

function addDrop(points) {

    //adds a drop with random coordinates
    var cX = Math.random();
    var cY = Math.random();

    //creates velocity vector   
    var vx = Math.random();
    var vy = Math.random();
    

    var center = vec2(cX, cY); 
   
    points.push(center);
    for (i = 0; i <= 100; i++){
        points.push(center + vec2(
            r*Math.cos(i * 2 * Math.PI / 200),
            r*Math.sin(i * 2 * Math.PI / 200) 
        ));
    }
    return points;
}