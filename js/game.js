(function() {
    let canvas;
    let ctx;
    let snake;
    const activeDot = function(x, y){
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(x * 10, y * 10, 10, 10);
    };
    const mainLoop = function() {
        //snake.pop;
        activeDot(snake[0].x, snake[0].y);
        setTimeout(mainLoop, 150);
    };
    const newGame =function(){
        snake =[];
        snake.push({x:20, y:20});
        mainLoop();
    };
    window.onload = function() {
        //Create Canvas
        canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        canvas.width = 400;
        canvas.height = 420;

        document.body.appendChild(canvas);

        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(0, 0, 400, 420);
        ctx.fillStyle = 'rgb(245, 245, 245)';
        ctx.fillRect(0, 400, 400, 20);
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.font = "15px Arial";
        ctx.fillText("Score:", 20, 415);
        ctx.fillText("Press P to Pause", 220, 415);
        newGame();
    }
})();