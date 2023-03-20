import { Transform } from "./transform.js";

export class Dot
{
    constructor(center, radius, color, type)
    {
        this.vertexPositions = new Float32Array(100);
        let count = 0;
        let numOfTr = 10;
        for(let i=0;i<numOfTr;i++)
        {
            var angle = 2*Math.PI*i/numOfTr;
            
            var x1 = center[0] + radius*Math.cos(angle);
            var y1 = center[1] + radius*Math.sin(angle);
        
            var x2 = center[0] + radius*Math.cos(angle+Math.PI*2/numOfTr);
            var y2 = center[1] + radius*Math.sin(angle+Math.PI*2/numOfTr);

            this.vertexPositions[count++] = center[0];
            this.vertexPositions[count++] = center[1];
            this.vertexPositions[count++] = 0.0;
            this.vertexPositions[count++] = x1;
            this.vertexPositions[count++] = y1;
            this.vertexPositions[count++] = 0.0;
            this.vertexPositions[count++] = x2;
            this.vertexPositions[count++] = y2;
            this.vertexPositions[count++] = 0.0;
            
        }

        this.type = type;
        this.color = color;
        this.transform = new Transform();
        this.flag = false;
    }

    visit()
    {
        if(!this.flag)
        {
            this.flag = true;
            this.color = [0/255, 255/255, 0/255, 1];
        }
    }

    eventHandler(eventkey)
    {
        var angle = 0;
		if(eventkey === "[")
		{
			angle = Math.PI/2.0;
		}
		else if(eventkey === "]")
		{
			angle = -1*Math.PI/2.0;
		}
		this.transform.rotation(angle);
    }
}