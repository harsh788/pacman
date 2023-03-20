export class Scene
{
	constructor()
	{
		this.primitives = [];
	}

	add(primitive)
	{
		if( this.primitives && primitive )
		{
			this.primitives.push(primitive);
            // console.log(this.primitives)
		}
	}

    remove(primitive) 
	{
		if (this.primitives && primitive) {
			let index = this.primitives.indexOf(primitive);
			if (index > -1) {
				this.primitives.splice(index, 1);
			}
		}
	}

	removeAll()
	{
		var len = this.getPrimitives().length;
		for(let i=0;i<len;i++)
		{
			this.remove(this.getPrimitives()[0]);
		}
	}

	getPrimitives() 
	{
		return this.primitives;
	}


	getPrimitive(index) 
	{
		return this.primitives[index];
	}


	getPrimitiveIndex(primitive) 
	{
		return this.primitives.indexOf(primitive);
	}

	centroid(primitive)
	{
		// @ToDo : Return the centroid as per the requirements of mode-2
	}
}
