import { Transform } from "./transform.js";

export class Pacman 
{
    constructor(center, radius, color)
    {
        this.vertexPositions = new Float32Array(1000);
        let count = 0;
        let numOfTr = 50;
        for(let i=0;i<numOfTr;i++)
        {
            var angle = 2*Math.PI*i/numOfTr;
            if(angle>0.6 && angle<5.686)
            {
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
        }

        this.type = "pacman";
        this.color = color;
        this.transform = new Transform();
        this.currDir = "R";
        this.center = [center[0]*100, center[1]*100];
        this.scale = "normal";      //Normal or enlarged mode
        this.coords = [1, 1];
        this.mode = "normal";       //Normal or modify mode
        this.radius = radius;
        this.state = "normal";      //Normal or selected mode
        this.startPosition = [
            [-0.85, 0.85], 
            [0.85, 0.85], 
            [-0.85, 0.85]];      // Specifies the starting position of pacman for all three configurations of the maze.
    }

    eventHandler(event, gridArr, dotArr, ghostArr, gridIndex)
	{
        var eventkey = event.key;

        var startPoint = [this.vertexPositions[0], this.vertexPositions[1]];

        if(this.scale === "enlarged")
        {
            this.scale = "normal";
            this.transform.scaling(1/1.5, 1/1.5, 0.0, startPoint);

            for(let j=0;j<ghostArr.length;j++)
            {
                ghostArr[j].changeState();
            }
        }
        
        if(this.mode === "normal")
        {
            if(eventkey === "ArrowRight")
            {
                if(gridArr[this.coords[0]][this.coords[1]+1] == 0)
                {
                    this.coords[1] = this.coords[1] + 1;
                    switch(this.currDir)
                    {
                        case"L":
                            this.transform.rotation(Math.PI, startPoint);
                            break;

                        case "U":
                            this.transform.rotation(-1*Math.PI/2.0, startPoint);
                            break;

                        case "D":
                            this.transform.rotation(Math.PI/2.0, startPoint);
                            break;
                    }
                    this.currDir = "R";
                    this.transform.translation(0.1, 0.0);
                    this.center[0] += 10;

                    for(let i=0;i<dotArr.length;i++)
                    {
                        if(Math.round(dotArr[i].vertexPositions[0]*100) == this.center[0] && Math.round(dotArr[i].vertexPositions[1]*100) == this.center[1])
                        {
                            if(dotArr[i].type === "powerPellet" && this.scale === "normal" && !dotArr[i].flag)
                            {
                                this.transform.scaling(1.5, 1.5, 0.0, startPoint);
                                this.scale = "enlarged";

                                for(let j=0;j<ghostArr.length;j++)
                                {
                                    ghostArr[j].changeState();
                                }
                            }
                            dotArr[i].visit();
                            break;
                        }
                    }
                }
            }
            else if(eventkey === "ArrowLeft")
            {
                if(gridArr[this.coords[0]][this.coords[1]-1] == 0)
                {
                    this.coords[1] = this.coords[1] - 1;
                    switch(this.currDir)
                    {
                        case"R":
                            this.transform.rotation(Math.PI, startPoint);
                            break;

                        case "U":
                            this.transform.rotation(Math.PI/2.0, startPoint);
                            break;

                        case "D":
                            this.transform.rotation(-1*Math.PI/2.0, startPoint);
                            break;
                    }
                    this.currDir = "L";
                    this.transform.translation(0.1, 0.0);
                    this.center[0] -= 10;

                    for(let i=0;i<dotArr.length;i++)
                    {
                        if(Math.round(dotArr[i].vertexPositions[0]*100) == this.center[0] && Math.round(dotArr[i].vertexPositions[1]*100) == this.center[1])
                        {
                            if(dotArr[i].type === "powerPellet" && this.scale === "normal" && !dotArr[i].flag)
                            {
                                this.transform.scaling(1.5, 1.5, 0.0, startPoint);
                                this.scale = "enlarged";

                                for(let j=0;j<ghostArr.length;j++)
                                {
                                    ghostArr[j].changeState();
                                }
                            }
                            dotArr[i].visit();
                            break;
                        }
                    }
                }
            }
            else if(eventkey === "ArrowUp")
            {
                if(gridArr[this.coords[0]-1][this.coords[1]] == 0)
                {
                    this.coords[0] = this.coords[0] - 1;
                    switch(this.currDir)
                    {
                        case"R":
                            this.transform.rotation(Math.PI/2.0, startPoint);
                            break;

                        case "L":
                            this.transform.rotation(-1*Math.PI/2.0, startPoint);
                            break;

                        case "D":
                            this.transform.rotation(Math.PI, startPoint);
                            break;
                    }
                    this.currDir = "U";
                    this.transform.translation(0.1, 0.0);
                    this.center[1] += 10;

                    for(let i=0;i<dotArr.length;i++)
                    {
                        if(Math.round(dotArr[i].vertexPositions[0]*100) == this.center[0] && Math.round(dotArr[i].vertexPositions[1]*100) == this.center[1])
                        {
                            if(dotArr[i].type === "powerPellet" && this.scale === "normal" && !dotArr[i].flag)
                            {
                                this.transform.scaling(1.5, 1.5, 0.0, startPoint);
                                this.scale = "enlarged";

                                for(let j=0;j<ghostArr.length;j++)
                                {
                                    ghostArr[j].changeState();
                                }
                            }
                            dotArr[i].visit();
                            break;
                        }
                    }
                }
            }
            else if(eventkey === "ArrowDown")
            {
                if(gridArr[this.coords[0]+1][this.coords[1]] == 0)
                {
                    this.coords[0] = this.coords[0] + 1;
                    switch(this.currDir)
                    {
                        case"R":
                            this.transform.rotation(-1*Math.PI/2.0, startPoint);
                            break;

                        case "L":
                            this.transform.rotation(Math.PI/2.0, startPoint);
                            break;

                        case "U":
                            this.transform.rotation(Math.PI, startPoint);
                            break;
                    }
                    this.currDir = "D";
                    this.transform.translation(0.1, 0.0);
                    this.center[1] -= 10;

                    for(let i=0;i<dotArr.length;i++)
                    {
                        if(Math.round(dotArr[i].vertexPositions[0]*100) == this.center[0] && Math.round(dotArr[i].vertexPositions[1]*100) == this.center[1])
                        {
                            if(dotArr[i].type === "powerPellet" && this.scale === "normal" && !dotArr[i].flag)
                            {
                                this.transform.scaling(1.5, 1.5, 0.0, startPoint);
                                this.scale = "enlarged";

                                for(let j=0;j<ghostArr.length;j++)
                                {
                                    ghostArr[j].changeState();
                                }
                            }
                            dotArr[i].visit();
                            break;
                        }
                    }
                }
            }
            else if(eventkey === "[")
            {
                this.transform.revolve(Math.PI/2.0);
            }
            else if(eventkey === "]")
            {
                this.transform.revolve(-1*Math.PI/2.0, [0, 0]);
            }	
            else if(eventkey === "(")
            {
                switch(this.currDir)
                {
                    case "R":
                        this.currDir = "RU";
                        break;
                    
                    case "RU":
                        this.currDir = "U";
                        break;
                    
                    case "U":
                        this.currDir = "LU";
                        break;

                    case "LU":
                        this.currDir = "L";
                        break;

                    case "L":
                        this.currDir = "LD";
                        break;

                    case "LD":
                        this.currDir = "D";
                        break;

                    case "D":
                        this.currDir = "RD";
                        break;

                    case "RD":
                        this.currDir = "R";
                        break;
                }
                this.transform.rotation(Math.PI/4, startPoint);
            }
            else if(eventkey === ")")
            {
                switch(this.currDir)
                {
                    case "R":
                        this.currDir = "RD";
                        break;
                    
                    case "RD":
                        this.currDir = "D";
                        break;
                    
                    case "D":
                        this.currDir = "LD";
                        break;

                    case "LD":
                        this.currDir = "L";
                        break;

                    case "L":
                        this.currDir = "LU";
                        break;

                    case "LU":
                        this.currDir = "U";
                        break;

                    case "U":
                        this.currDir = "RU";
                        break;

                    case "RU":
                        this.currDir = "R";
                        break;
                }
                this.transform.rotation(-1*Math.PI/4, startPoint);
            }
            else if(eventkey === "m")
            {
                this.mode = "modify";
                console.log("Mode set to: \"modify\" ");
            }
            else if(eventkey === "c")
            {
                var pos = this.startPosition[gridIndex];                

                switch(this.currDir)
                {
                    case "R":
                        this.transform.translation(pos[0]-this.center[0]/100, pos[1]-this.center[1]/100);
                        break;

                    case "L":
                        this.transform.translation(-1*(pos[0]-this.center[0]/100), pos[1]-this.center[1]/100);
                        break;

                    case "U":
                        this.transform.translation(pos[1]-this.center[1]/100, -1*(pos[0]-this.center[0]/100));
                        break;

                    case "D":
                        this.transform.translation(-1*(pos[1]-this.center[1]/100), pos[0]-this.center[0]/100);
                        break;
                }

                this.center = [pos[0]*100, pos[1]*100];
                if(gridIndex == 0)
                {
                    this.coords = [1, 1];
                }
                else if(gridIndex == 1)
                {
                    this.coords = [1, 18];
                }
                else if(gridIndex == 2)
                {
                    this.coords = [1, 1];
                }              
            }
        }
        else if(this.mode === "modify")
        {   
            if(eventkey === "m")
            {
                this.mode = "normal";
            }
        }
	}

    mouseEventHandler(mousePoint, gridArr)
    {
        if(this.mode === "modify")
        {
            if(this.state === "normal" && mousePoint.x>this.center[0]/100-this.radius && mousePoint.x<this.center[0]/100+this.radius && 
                mousePoint.y>this.center[1]/100-this.radius && mousePoint.y<this.center[1]/100+this.radius)
                {
                    console.log("Press again to drop the pacman!!");
                    this.state = "selected";
                }
            else if(this.state === "selected")
            {
                var ceilX = Math.ceil(mousePoint.x*10)/10;
                var ceilY = Math.ceil(mousePoint.y*10)/10;

                var j = 9+ceilX*10;
                var i = 9-ceilY*10;

                if(gridArr[i][j] == 0)
                {
                    if(this.currDir === "R")
                    {
                        this.transform.translation(ceilX-this.center[0]/100-0.05, ceilY-this.center[1]/100-0.05);
                    }
                    else if(this.currDir === "L")
                    {
                        this.transform.translation(-1*(ceilX-this.center[0]/100-0.05), -1*(ceilY-this.center[1]/100-0.05));
                    }
                    else if(this.currDir === "U")
                    {
                        this.transform.translation(ceilY-this.center[1]/100-0.05, -1*(ceilX-this.center[0]/100-0.05));
                    }
                    else if(this.currDir === "D")
                    {
                        this.transform.translation(-1*(ceilY-this.center[1]/100-0.05), ceilX-this.center[0]/100-0.05);
                    }

                    this.center[0] = ceilX*100-5;
                    this.center[1] = ceilY*100-5;

                    this.coords = [i+1, j];
                }
                else
                {
                    console.log("Inaccessible point");
                }
                this.state = "normal";
                console.log("Mode set to: \"normal\" ");
            }
        }
        else if(this.mode === "normal")
        {
            console.log("Change the mode to modify");
        }
    }
}