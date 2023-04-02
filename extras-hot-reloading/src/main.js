// Initialize the WebGL context.
const canvas = document.getElementById("webgl-canvas");
const gl = canvas.getContext("webgl2");

main();

function createShader(gl, type, source) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}

/**
 * Make sure the WebGL context has been initialized, then clear the canvas.
 */
function main() {
    // Validate the rendering context.
    if (gl === null) {
        console.error("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    let shaderProgram = gl.createProgram();

    // Load the shaders
    let vertexShaderSource = require("./shaders/vertex.glsl");
    let fragmentShaderSource = require("./shaders/fragment.glsl");

    // Create the shaders
    let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    // Link the shaders
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram);

    // Clear the canvas.
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
    
    console.log("Hello, WebGL!");
}