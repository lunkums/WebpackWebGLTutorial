// Initialize the WebGL context.
const canvas: HTMLCanvasElement = document.getElementById("webgl-canvas") as HTMLCanvasElement;
const gl: WebGL2RenderingContext = canvas.getContext("webgl2");

main();

function createShader(gl: WebGL2RenderingContext, type: GLenum, source: string): WebGLShader {
    let shader: WebGLShader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}

/**
 * Make sure the WebGL context has been initialized, then clear the canvas.
 */
function main(): void {
    // Validate the rendering context.
    if (gl === null) {
        console.error("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    let shaderProgram: WebGLProgram = gl.createProgram();

    // Load the shaders
    let vertexShaderSource: string = require("./shaders/vertex.glsl");
    let fragmentShaderSource: string = require("./shaders/fragment.glsl");

    // Create the shaders
    let vertexShader: WebGLShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    let fragmentShader: WebGLShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

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