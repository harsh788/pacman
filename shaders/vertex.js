export const vertexShaderSrc = `      
	attribute vec3 aPosition;
    uniform mat4 uModelMatrix;
    
	void main () {             
		gl_Position =  uModelMatrix*vec4(aPosition, 1.0);
        gl_PointSize = 10.0; 
	}                          
`;