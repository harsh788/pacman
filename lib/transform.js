import { vec3, mat4, vec4 } from 'https://cdn.skypack.dev/gl-matrix';

export class Transform
{
	constructor()
	{
		this.translate = vec3.create();
		vec3.set(this.translate, 0, 0, 0);
		
		this.scale = vec3.create();
		vec3.set(this.scale, 1, 1, 1);
		
		this.rotationAngle = 0;
		this.rotationAxis = vec3.create();
		vec3.set(this.rotationAxis, 1, 0, 0);

		this.modelTransformMatrix = mat4.create();
		mat4.identity(this.modelTransformMatrix);
		
		this.updateModelTransformMatrix();
		this.translation(0.0, 0.0);
		this.rotation(0, );
	}

	updateModelTransformMatrix()
	{ 
		// @ToDO
		// 1. Reset the transformation matrix
		// 2. Use the current transformations values to calculate the latest transformation matrix
	}	
	translation(tx, ty)
	{
		vec3.set(this.translate, tx, ty, 0.0);
		mat4.translate(this.modelTransformMatrix, this.modelTransformMatrix, this.translate);
	}
	rotation(angle, center=[0, 0])
	{
		this.translation(center[0], center[1]);

		this.rotationAngle = angle;
		vec3.set(this.rotationAxis, 0, 0, 1); 
		mat4.rotate(this.modelTransformMatrix, this.modelTransformMatrix, angle, this.rotationAxis);

		this.translation(-1*center[0], -1*center[1]);
	}
	scaling(sx, sy, sz, center=[0, 0])
	{
		this.translation(center[0], center[1]);
		
		vec3.set(this.scale, sx, sy, sz);
		mat4.scale(this.modelTransformMatrix, this.modelTransformMatrix, this.scale);

		this.translation(-1*center[0], -1*center[1]);
	}
	revolve(angle)
	{
		this.rotationAngle = angle;
		vec3.set(this.rotationAxis, 0, 0, 1); 
		mat4.rotate(this.modelTransformMatrix, this.modelTransformMatrix, angle, this.rotationAxis);
	}
}