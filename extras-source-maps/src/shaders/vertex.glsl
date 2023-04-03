#version 300 es
// vertex.glsl

layout(location = 0) in vec4 a_position;
layout(location = 1) in vec4 a_color;

out vec4 color;

void main(void)
{
    gl_Position = a_position;
    color = a_color;
}