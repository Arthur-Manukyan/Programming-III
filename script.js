function setup() {
    var socket = io();
    var side = 5;
    var matrix = [];
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let hunterCountElement = document.getElementById('hunterCount');
    let covidCountElement = document.getElementById('covidCount')

    socket.on("data", drawCreatures);
    socket.on("matrix", drawCreatures)
    socket.on("weather", (data) => weath = data)

    function drawCreatures(data) {
        weath = data.weath;
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        predatorCountElement.innerText = data.predatorCounter;
        hunterCountElement.innerText = data.hunterCounter;
        covidCountElement.innerText = data.covidCounter;
        console.log(data.covidCounter);
        createCanvas(matrix[0].length * side, matrix.length * side)
        background('#acacac');
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(weath == "spring")
                    {
                        fill("green")
                    }
                    else if(weath == "summer")
                    {
                        fill("black");
                    }
                    else if(weath == "winter")
                    {
                        fill("white")
                    }
                    else if(weath == "autumn")
                    {
                        fill("#4dffa6")
                    }
                    rect(j * side, i * side, side, side);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('orange');
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}