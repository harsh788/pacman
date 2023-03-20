import { Scene, Triangle, Quadrilateral, WebGLRenderer, Shader, Pacman, Grid} from './lib/threeD.js';
import {vertexShaderSrc} from './shaders/vertex.js';
import {fragmentShaderSrc} from './shaders/fragment.js';
import { Dot } from './lib/dot.js';
import { Ghost } from './lib/ghost.js';


const renderer = new WebGLRenderer();
renderer.setSize(700, 700);

document.body.appendChild(renderer.domElement);

const shader = new Shader(
	renderer.glContext(),
	vertexShaderSrc,
	fragmentShaderSrc
);

shader.use();




// const triangle1 = new Triangle(
//     [0, 0],
//     [0.5, 0.5],
//     [0.5, -0.5],
//     [74 / 255, 134 / 255, 232 / 255, 1]
// );
// const triangle2 = new Triangle(
//     [0, 0],
//     [0.5, 0.5],
//     [-0.5, 0.5],
//     [255 / 255, 153 / 255, 0 / 255, 1]
// );
// const triangle3 = new Triangle(
//     [0, -0.5],
//     [0.25, -0.25],
//     [0.5, -0.5],
//     [1, 1, 0, 1]
// );
// const quadrilateral1 = new Quadrilateral(
//     [0, 0],
//     [0.25, -0.25],
//     [0, -0.5],
//     [-0.25, -0.25],
//     [1, 0, 0, 1]
// );
// const triangle4 = new Triangle(
//     [0, 0],
//     [-0.25, -0.25],
//     [-0.25, 0.25],
//     [0, 1, 1, 1]
// );
// const quadrilateral2 = new Quadrilateral(
//     [-0.5, 0.5],
//     [-0.25, 0.25],
//     [-0.25, -0.25],
//     [-0.5, 0],
//     [1, 0, 1, 1]
// );
// const triangle5 = new Triangle(
//     [-0.5, 0],
//     [-0.5, -0.5],
//     [0, -0.5],
//     [0, 1, 0, 1]
// );
// const rec1 = new Quadrilateral(
//     [-0.85, 0.85],
//     [-0.35, 0.85],
//     [-0.35, 0.55],
//     [-0.85, 0.55],
//     [54/255, 1/255, 63/255, 0.7]
// );
// const rec2 = new Quadrilateral(
//     [-0.25, 0.85],
//     [0.15, 0.85],
//     [0.15, 0.55],
//     [-0.25, 0.55],
//     [54/255, 1/255, 63/255, 0.7],
// );
// const rec3 = new Quadrilateral(
//     [0.25, 1],
//     [0.45, 1],
//     [0.45, 0.15],
//     [0.25, 0.15],
//     [54/255, 1/255, 63/255, 0.7],
// );
// const rec4 = new Quadrilateral(
//     [0.55, 0.85],
//     [0.85, 0.85],
//     [0.85, 0.55],
//     [0.55, 0.55],
//     [54/255, 1/255, 63/255, 0.7],
// );

// const rec5 = new Quadrilateral(
//     [-1, 0.45],
//     [-0.45, 0.45],
//     [-0.45, 0.15],
//     [-1, 0.15],
//     [54/255, 1/255, 63/255, 0.7]
// );
// const rec6 = new Quadrilateral(
//     [-0.35, 0.45],
//     [0.15, 0.45],
//     [0.15, 0.15],
//     [-0.35, 0.15],
//     [54/255, 1/255, 63/255, 0.7]
// );
// const rec7 = new Quadrilateral(
//     [0.55, 0.45],
//     [0.85, 0.45],
//     [0.85, 0.05],
//     [0.55, 0.05],
//     [54/255, 1/255, 63/255, 0.7],
// );

// const rec8 = new Quadrilateral(
//     [-0.85, 0.05],
//     [0.25, 0.05],
//     [0.25, -0.25],
//     [-0.85, -0.25],
//     [54/255, 1/255, 63/255, 0.7]
// );
// const rec9 = new Quadrilateral(
//     [-0.85, -0.25],
//     [-0.35, -0.25],
//     [-0.35, -0.55],
//     [-0.85, -0.55],
//     [54/255, 1/255, 63/255, 0.7]
// );
// const rec10 = new Quadrilateral(
//     [-0.25, -0.35],
//     [0.25, -0.35],
//     [0.25, -0.65],
//     [-0.25, -0.65],
//     [54/255, 1/255, 63/255, 0.7]
// );
// const rec11 = new Quadrilateral(
//     [-0.85, -0.65],
//     [0.25, -0.65],
//     [0.25, -0.85],
//     [-0.85, -0.85],
//     [54/255, 1/255, 63/255, 0.7]
// );

// const rec12 = new Quadrilateral(
//     [0.35, 0.05],
//     [0.85, 0.05],
//     [0.85, -0.45],
//     [0.35, -0.45],
//     [54/255, 1/255, 63/255, 0.7],
// );
// const rec13 = new Quadrilateral(
//     [0.35, -0.55],
//     [1, -0.55],
//     [1, -0.65],
//     [0.35, -0.65],
//     [54/255, 1/255, 63/255, 0.7],
// );
// const rec14 = new Quadrilateral(
//     [0.35, -0.75],
//     [0.85, -0.75],
//     [0.85, -0.85],
//     [0.35, -0.85],
//     [54/255, 1/255, 63/255, 0.7],
// );

// const borderL = new Quadrilateral(
//     [-1, 1],
//     [-1, -1],
//     [-0.95, -1],
//     [-0.95, 1],
//     [54/255, 1/255, 63/255, 0.7],
// );
// const borderU = new Quadrilateral(
//     [-1, 1],
//     [-1, 0.95],
//     [1, 0.95],
//     [1, 1],
//     [54/255, 1/255, 63/255, 0.7],
// );
// const borderR = new Quadrilateral(
//     [0.95, 1],
//     [0.95, -1],
//     [1, -1],
//     [1, 1],
//     [54/255, 1/255, 63/255, 0.7],
// );
// const borderD = new Quadrilateral(
//     [-1, -0.95],
//     [-1, -1],
//     [1, -1],
//     [1, -0.95],
//     [54/255, 1/255, 63/255, 0.7],
// );
const pacman = new Pacman(
    [-0.85, 0.85],
    0.035,
    [255 / 255, 255 / 255, 0 / 255, 1]
);
const ghost1 = new Ghost(
    [-0.15, 0.09],
    [-0.11, 0.01],
    [-0.19, 0.01],
    [255/255, 0/255, 0/255, 1]
);
const ghost2 = new Ghost(
    [-0.05, 0.09],
    [-0.01, 0.01],
    [-0.09, 0.01],
    [0/255, 0/255, 128/255, 1]
);
const ghost3 = new Ghost(
    [0.05, 0.09],
    [0.01, 0.01],
    [0.09, 0.01],
    [0/255, 100/255, 0/255, 1]
);


const scene = new Scene();

const grid = new Grid(
    20,
    20, 
    0.1
);
grid.create();

var gridIndex = 0;
var gridArr = grid.fetchGrid(gridIndex);     
var dotArr = [];
var ghostArr = [];

var renderScene = (gridArr, gridIndex) =>
{
    scene.removeAll();
    dotArr = [];
    ghostArr = [];

    for(let i=0;i<20;i++)
    {
        for(let j=0;j<20;j++)
        {
            if(gridArr[i][j] == 1)
            {
                var rect = new Quadrilateral(
                    [0.1*j-1,     1-0.1*i],
                    [0.1*j-1+0.1, 1-0.1*i],
                    [0.1*j-1+0.1, 1-0.1*i-0.1],
                    [0.1*j-1, 1-0.1*i-0.1],
                    [95/255, 1/255, 112/255, 1]
                );
                scene.add(rect);
            }
            else if(gridArr[i][j] == 0)
            {
                if(((i==17 && j==4) || (i==17 && j==14) && gridIndex == 0)
                || ((i==9 && j==7) || (i==14 && j==14) && gridIndex == 1)
                || ((i==12 && j==7) && gridIndex == 2))         //Power Pellet
                {
                    var dot = new Dot(
                        [0.1*j-0.95, 0.95-0.1*i],
                        0.025,
                        [255/255, 165/255, 0/255, 1],
                        "powerPellet"
                    );
                }
                else        //Normal Dot
                {
                    var dot = new Dot(
                        [0.1*j-0.95, 0.95-0.1*i],
                        0.01,
                        [255/255, 165/255, 0/255, 1],
                        "dot"
                    );
                }
                scene.add(dot);
                dotArr.push(dot);
            }
        }
    }
    scene.add(pacman);
    scene.add(ghost1);
    scene.add(ghost2);
    scene.add(ghost3);

    ghostArr.push(ghost1);
    ghostArr.push(ghost2);
    ghostArr.push(ghost3);
};

renderScene(gridArr, gridIndex);

document.addEventListener("keydown", event => {
    if(event.key == "[" || event.key == "]")
    {
        var prims = scene.getPrimitives();
        for(let i=0;i<prims.length;i++)
        {
            // if(prims[i].type === "ghost")
            // {
            //     continue;
            // }

            if(prims[i].type === "pacman")
            {
                prims[i].eventHandler(event, gridArr, dotArr, ghostArr);
            }
            else
            {
                prims[i].eventHandler(event.key);
            }
        }
    }
    else if(event.key === "ArrowRight" || event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "ArrowDown" 
            || event.keyCode == 57 ||event.keyCode == 48 || event.key === "m")
            {
                pacman.eventHandler(event, gridArr, dotArr, ghostArr, gridIndex);
            }
    else if(event.key === "c")
    {
        var temp = gridIndex+1;
        gridIndex = temp%3;
        pacman.eventHandler(event, gridArr, dotArr, ghostArr, gridIndex);
        gridArr = grid.fetchGrid(gridIndex);        
        renderScene(gridArr, gridIndex);
    }
})

document.addEventListener("click", event => {
        
    // coords contains the x, y
    // of the mouse click
    const coords = renderer.mouseToClipCoord(event);
    pacman.mouseEventHandler(coords, gridArr);

    // console.log(coords.x, coords.y);
})


renderer.setAnimationLoop(animation);

//Draw loop
function animation() 
{
	renderer.clear(54/255, 1/255, 63/255, 0.7);
	renderer.render(scene, shader);
}
