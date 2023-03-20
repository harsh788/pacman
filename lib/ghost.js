import { Transform } from "./transform.js";
import { Triangle } from "./triangle.js";

export class Ghost
{
    constructor(vert1, vert2, vert3, color)
    {
        var triangle = new Triangle(vert1, vert2, vert3, color);
        
        this.vertexPositions = triangle.vertexPositions;
        this.color = color;
        this.transform = triangle.transform;
        this.type = "ghost";
        this.state = "active";
        this.prevColor = [0/255, 0/255, 255/255, 1];
    }

    changeState()
    {
        var temp = this.prevColor;
        this.state = "inactive";
        this.prevColor = this.color;
        this.color = temp;
    }

    eventHandler(eventkey)
    {
        // var cenX = 0.0, cenY = 0.0;
        // for(let i=0;i<3;i++)
        // {
        //     cenX += this.vertexPositions[i*2];
        //     cenY += this.vertexPositions[i*2+1];
        // }
        // cenX = cenX/3.0;
        // cenY = cenY/3.0;
        // console.log(cenX, cenY);

        if(eventkey === "[")
        {
            this.transform.revolve(Math.PI/2.0);
            // this.transform.rotation(-1*Math.PI/2.0, [cenX, cenY]);
        }
        else if(eventkey === "]")
        {
            this.transform.revolve(-1*Math.PI/2.0);
            // this.transform.rotation(Math.PI/2.0, [cenX, cenY]);
        }
    }
}