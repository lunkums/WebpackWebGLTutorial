#version 300 es
// fragment.glsl

precision highp float;

in vec4 color;
out vec4 FragColor;

void main(void)
{
    FragColor = color;
}