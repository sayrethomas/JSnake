
(function() {
    //Canvas Context
    let canvas;
    let ctx;
    //Snake Elements
    let snake;
    let snakeDir;
    let snakeNextDir;

    function changeDir(key) {
        //UP
        if(key === 38 && snakeDir !== 2){
            snakeNextDir = 0;
        }
        else{
            //RIGHT
            if (key === 39 && snakeDir !== 3){
                snakeNextDir = 1;
            }
            else{
                //DOWN
                if (key === 40 && snakeDir !== 0){
                    snakeNextDir = 2;
                }
                else{
                    //LEFT
                    if(key === 37 && snakeDir !== 1){
                        snakeNextDir = 3;
                    }
                }
            }
        }
    }
    const activeDot = function(x, y){
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(x * 10, y * 10, 10, 10);
    };
    const setFrames = function(frame){
        switch(frame) {
            case 0:
                document.getElementById("end").style.display = "none";
                document.getElementById("start").style.display = "block";
                break;
            case 1:
                document.getElementById("end").style.display = "block";
                document.getElementById("start").style.display = "none";
                break;
            case 2:
                document.getElementById("end").style.display = "none";
                document.getElementById("start").style.display = "none";
                break;
        }
    };
    const mainLoop = function() {
        let sX = snake[0].x;
        let sY = snake[0].y;
        snakeDir = snakeNextDir;
        // 0 - Up, 1 - Right, 2 - Down, 3 - Left
        switch(snakeDir){
            case 0: sY--; break;
            case 1: sX++; break;
            case 2: sY++; break;
            case 3: sX--; break;
        }
        snake.pop();
        snake.unshift({x: sX, y: sY});
        if(snake[0].x < 0 || snake[0].x === canvas.width/10 || snake[0].y < 0 || snake[0].y === canvas.height/10){
            setFrames(1);
            return;
        }
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(0, 0, canvas.width, canvas.height-20);
        for(let i = 0; i < snake.length; i++) {
            activeDot(snake[i].x, snake[i].y);
        }
        setTimeout(mainLoop, 150);
    };
    const newGame =function(){
        setFrames(2);
        snake =[];
        for(let i = 4; i >= 0; i--) {
            snake.push({x: 20, y: i+20});
        }
        snakeNextDir = 2;
        canvas.onkeydown = function(event){
            event = event || window.event;
            changeDir(event.keyCode);
        };
        mainLoop();
    };
    window.onload = function() {
        //Create Canvas
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        setFrames(0);
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(0, 0, canvas.width, canvas.height-20);
        ctx.fillStyle = 'rgb(245, 245, 245)';
        ctx.fillRect(0, canvas.width, canvas.width, 20);
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.font = "15px Arial";
        ctx.fillText("Score:", 20, canvas.height-5);
        ctx.fillText("Press Space to Pause", 220, canvas.height-5);
        canvas.onclick= function() {newGame();};
        //newGame();
    }
})();