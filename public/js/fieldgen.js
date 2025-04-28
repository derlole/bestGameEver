
function getFieldPermission(fieldright) {

    var randomdirection = [1, 1, 1, 1];
    if (fieldright[1] === 0) {
        var randomdirection = [1, 1, 1, 0];

    }
    if (fieldright[1] === 9) {
        var randomdirection = [1, 0, 1, 1];

    }
        if (fieldright[0] === 0) {
            var randomdirection = [1, 1, 0, 1];

                if (fieldright[1] === 0) {
                    var randomdirection = [1, 1, 0, 0];

                }
                if (fieldright[1] === 9) {
                    var randomdirection = [1, 0, 0, 1];
                    console.log('ich hab ein loli nur für mich allein, ätsch :]')

                }
        } 
        if (fieldright[0] === 9) {
            var randomdirection = [0, 1, 1, 1];

            if (fieldright[1] === 0) {
                var randomdirection = [0, 1, 1, 0];

            }
            if (fieldright[1] === 9) {
                var randomdirection = [0, 0, 1, 1];

            }
        }
        return randomdirection;
}
function generateNextField(startfield) {
        var PermRightStartfield = getFieldPermission(startfield);
        var directionindex = Math.random();
        if (directionindex <=0.25) {
            var index = "right";
        } else if (directionindex <=0.5 && directionindex >0.25) {
            var index = "down";
        } else if (directionindex <=0.75 && directionindex >0.5) {
            var index = "left";
        } else if (directionindex <=1 && directionindex >0.75) {
            var index = "up";
        }
        switch (index) {
            case "right":
                if (PermRightStartfield[0] === 0) { //wenn es nicht nach rechts darf
                    var nextFiled = [startfield[0]-1, startfield[1]]; //dann naach links
                } else {
                    var nextFiled = [startfield[0]+1, startfield[1]]; //sonst nach rechts
                }
                break;
            case "down":
                if (PermRightStartfield[1] === 0) { //wenn es nicht nach oben darf
                    var nextFiled = [startfield[0], startfield[1]-1]; //dann nach unten
                } else {
                    var nextFiled = [startfield[0], startfield[1]+1]; //sonst nach oben
                }
                break;
            case "left":
                if (PermRightStartfield[2] === 0) { //wenn es nicht nach links darf
                    var nextFiled = [startfield[0]+1, startfield[1]]; //dann nach rechts
                } else {
                    var nextFiled = [startfield[0]-1, startfield[1]]; //sonst nach links
                }
                break;
            case "up":
                if (PermRightStartfield[3] === 0) { //wenn es nicht nach unten darf
                    var nextFiled = [startfield[0], startfield[1]+1]; //dann nach oben
                } else {
                    var nextFiled = [startfield[0], startfield[1]-1]; //sonst nach unten
                }
                break;
            } 
return nextFiled;
}
function generateField(array) {
    const fieldMap = new Map();
  
    for (let index = 0; index < 100; index++) {
      const row = Math.floor(index / 10); // Berechnung der Zeile
      const column = index % 10; // Berechnung der Spalte
      const fieldKey = `${row},${column}`;
      const fieldValue = (array.some(element => element[0] === row && element[1] === column)) ?  true : false//"🟩" : "⬜";
      fieldMap.set(fieldKey, fieldValue);
    }
  
    return fieldMap;
  }
  
//generating 80 (overlapping) true-fields
        const startField = [5, 5]
  
            for (let i = 0; i < 80; i++) {
                if(!nextFiled) { //falls das erste feld generiert wird
                    var nextFiled = generateNextField(startField);
                    var fields = [startField, nextFiled];
                } else { //allle anderen 79 felder
                    var nextFiled = generateNextField(nextFiled);
                    fields.push(nextFiled);
                }
            }

            const fieldFinal = generateField(fields);
        
            function removeDuplicates(arr) {
                const counts = {};
                const result = [];
              
                for (let i = 0; i < arr.length; i++) {
                  const num = arr[i];
                  if (counts[num] === undefined) {
                    counts[num] = 1;
                    result.push(num);
                  }
                }
              
                return result;
              }

// corner array definition
var movecorners = [];
{
    if(fieldFinal.get('0,0') === true) movecorners.push(1,2,12,13);
    if(fieldFinal.get('0,1') === true) movecorners.push(2,3,13,14);
    if(fieldFinal.get('0,2') === true) movecorners.push(3,4,14,15);
    if(fieldFinal.get('0,3') === true) movecorners.push(4,5,15,16);  
    if(fieldFinal.get('0,4') === true) movecorners.push(5,6,16,17);
    if(fieldFinal.get('0,5') === true) movecorners.push(6,7,17,18);
    if(fieldFinal.get('0,6') === true) movecorners.push(7,8,18,19);
    if(fieldFinal.get('0,7') === true) movecorners.push(8,9,19,20);
    if(fieldFinal.get('0,8') === true) movecorners.push(9,10,20,21);
    if(fieldFinal.get('0,9') === true) movecorners.push(10,11,21,22);
    if(fieldFinal.get('1,0') === true) movecorners.push(12,13,23,24);
    if(fieldFinal.get('1,1') === true) movecorners.push(13,14,24,25);
    if(fieldFinal.get('1,2') === true) movecorners.push(14,15,25,26);
    if(fieldFinal.get('1,3') === true) movecorners.push(15,16,26,27);
    if(fieldFinal.get('1,4') === true) movecorners.push(16,17,27,28);
    if(fieldFinal.get('1,5') === true) movecorners.push(17,18,28,29);
    if(fieldFinal.get('1,6') === true) movecorners.push(18,19,29,30);
    if(fieldFinal.get('1,7') === true) movecorners.push(19,20,30,31);
    if(fieldFinal.get('1,8') === true) movecorners.push(20,21,31,32);
    if(fieldFinal.get('1,9') === true) movecorners.push(21,22,32,33);
    if(fieldFinal.get('2,0') === true) movecorners.push(23,24,34,35);
    if(fieldFinal.get('2,1') === true) movecorners.push(24,25,35,36);
    if(fieldFinal.get('2,2') === true) movecorners.push(25,26,36,37);
    if(fieldFinal.get('2,3') === true) movecorners.push(26,27,37,38);
    if(fieldFinal.get('2,4') === true) movecorners.push(27,28,38,39);
    if(fieldFinal.get('2,5') === true) movecorners.push(28,29,39,40);
    if(fieldFinal.get('2,6') === true) movecorners.push(29,30,40,41);
    if(fieldFinal.get('2,7') === true) movecorners.push(30,31,41,42);
    if(fieldFinal.get('2,8') === true) movecorners.push(31,32,42,43);    
    if(fieldFinal.get('2,9') === true) movecorners.push(32,33,43,44);
    if(fieldFinal.get('3,0') === true) movecorners.push(34,35,45,46);
    if(fieldFinal.get('3,1') === true) movecorners.push(35,36,46,47);
    if(fieldFinal.get('3,2') === true) movecorners.push(36,37,47,48);
    if(fieldFinal.get('3,3') === true) movecorners.push(37,38,48,49);
    if(fieldFinal.get('3,4') === true) movecorners.push(38,39,49,50);
    if(fieldFinal.get('3,5') === true) movecorners.push(39,40,50,51);
    if(fieldFinal.get('3,6') === true) movecorners.push(40,41,51,52);
    if(fieldFinal.get('3,7') === true) movecorners.push(41,42,52,53);
    if(fieldFinal.get('3,8') === true) movecorners.push(42,43,53,54);
    if(fieldFinal.get('3,9') === true) movecorners.push(43,44,54,55);
    if(fieldFinal.get('4,0') === true) movecorners.push(45,46,56,57);
    if(fieldFinal.get('4,1') === true) movecorners.push(46,47,57,58);
    if(fieldFinal.get('4,2') === true) movecorners.push(47,48,58,59);
    if(fieldFinal.get('4,3') === true) movecorners.push(48,49,59,60);
    if(fieldFinal.get('4,4') === true) movecorners.push(49,50,60,61);
    if(fieldFinal.get('4,5') === true) movecorners.push(50,51,61,62);
    if(fieldFinal.get('4,6') === true) movecorners.push(51,52,62,63);
    if(fieldFinal.get('4,7') === true) movecorners.push(52,53,63,64);    
    if(fieldFinal.get('4,8') === true) movecorners.push(53,54,64,65);
    if(fieldFinal.get('4,9') === true) movecorners.push(54,55,65,66);
    if(fieldFinal.get('5,0') === true) movecorners.push(56,57,67,68);
    if(fieldFinal.get('5,1') === true) movecorners.push(57,58,68,69);
    if(fieldFinal.get('5,2') === true) movecorners.push(58,59,69,70);
    if(fieldFinal.get('5,3') === true) movecorners.push(59,60,70,71);
    if(fieldFinal.get('5,4') === true) movecorners.push(60,61,71,72);
    if(fieldFinal.get('5,5') === true) movecorners.push(61,62,72,73);
    if(fieldFinal.get('5,6') === true) movecorners.push(62,63,73,74);
    if(fieldFinal.get('5,7') === true) movecorners.push(63,64,74,75);
    if(fieldFinal.get('5,8') === true) movecorners.push(64,65,75,76);
    if(fieldFinal.get('5,9') === true) movecorners.push(65,66,76,77);
    if(fieldFinal.get('6,0') === true) movecorners.push(67,68,78,79);
    if(fieldFinal.get('6,1') === true) movecorners.push(68,69,79,80);
    if(fieldFinal.get('6,2') === true) movecorners.push(69,70,80,81);
    if(fieldFinal.get('6,3') === true) movecorners.push(70,71,81,82);    
    if(fieldFinal.get('6,4') === true) movecorners.push(71,72,82,83);
    if(fieldFinal.get('6,5') === true) movecorners.push(72,73,83,84);
    if(fieldFinal.get('6,6') === true) movecorners.push(73,74,84,85);
    if(fieldFinal.get('6,7') === true) movecorners.push(74,75,85,86);
    if(fieldFinal.get('6,8') === true) movecorners.push(75,76,86,87);    
    if(fieldFinal.get('6,9') === true) movecorners.push(76,77,87,88);
    if(fieldFinal.get('7,0') === true) movecorners.push(78,79,89,90);
    if(fieldFinal.get('7,1') === true) movecorners.push(79,80,90,91);
    if(fieldFinal.get('7,2') === true) movecorners.push(80,81,91,92);
    if(fieldFinal.get('7,3') === true) movecorners.push(81,82,92,93);    
    if(fieldFinal.get('7,4') === true) movecorners.push(82,83,93,94);
    if(fieldFinal.get('7,5') === true) movecorners.push(83,84,94,95);
    if(fieldFinal.get('7,6') === true) movecorners.push(84,85,95,96);
    if(fieldFinal.get('7,7') === true) movecorners.push(85,86,96,97);
    if(fieldFinal.get('7,8') === true) movecorners.push(86,87,97,98);
    if(fieldFinal.get('7,9') === true) movecorners.push(87,88,98,99);    
    if(fieldFinal.get('8,0') === true) movecorners.push(89,90,100,101);
    if(fieldFinal.get('8,1') === true) movecorners.push(90,91,101,102);  
    if(fieldFinal.get('8,2') === true) movecorners.push(91,92,102,103);
    if(fieldFinal.get('8,3') === true) movecorners.push(92,93,103,104);
    if(fieldFinal.get('8,4') === true) movecorners.push(93,94,104,105);
    if(fieldFinal.get('8,5') === true) movecorners.push(94,95,105,106);
    if(fieldFinal.get('8,6') === true) movecorners.push(95,96,106,107);
    if(fieldFinal.get('8,7') === true) movecorners.push(96,97,107,108);  
    if(fieldFinal.get('8,8') === true) movecorners.push(97,98,108,109);  
    if(fieldFinal.get('8,9') === true) movecorners.push(98,99,109,110);
    if(fieldFinal.get('9,0') === true) movecorners.push(100,101,111,112);    
    if(fieldFinal.get('9,1') === true) movecorners.push(101,102,112,113);    
    if(fieldFinal.get('9,2') === true) movecorners.push(102,103,113,114);    
    if(fieldFinal.get('9,3') === true) movecorners.push(103,104,114,115);
    if(fieldFinal.get('9,4') === true) movecorners.push(104,105,115,116);
    if(fieldFinal.get('9,5') === true) movecorners.push(105,106,116,117);
    if(fieldFinal.get('9,6') === true) movecorners.push(106,107,117,118);    
    if(fieldFinal.get('9,7') === true) movecorners.push(107,108,118,119);
    if(fieldFinal.get('9,8') === true) movecorners.push(108,109,119,120);
    if(fieldFinal.get('9,9') === true) movecorners.push(109,110,120,121);
}
sortetmovecorners = movecorners.sort(function(a, b){return a-b});
const corners = removeDuplicates(sortetmovecorners);

var currentCorner = 72;
//console.log(corners);

//overll field courdinates system
for (let i = 1; i <= 100; i++) {
    const field = document.getElementById("field" + i);
    const coordinates = Math.floor((i - 1) / 10) + "," + ((i - 1) % 10);
    const state = fieldFinal.get(coordinates);
    if(state) {
        var green = document.createElement("div");
        green.classList.add("fieldgreen");
        field.appendChild(green);
    }

}

var moves = [];
function movePermission(start, wantToGo) {
    var movePermission = true;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i][0] == start && moves[i][1] == wantToGo) {
            movePermission = false;
        }
    }
    return movePermission;
}

var state = 0;
var counter = 0;
var pointX = 397;
var pointY = 475;
let beginnts 
let endts
var currentCorner = 72;
const Schrift = document.getElementById("schrift");
const counterText = document.getElementById("counter");
const avlbcorners = document.getElementById("avlbcorners");
const timer = document.getElementById("timer");
avlbcorners.textContent = ("Erreichbare Ecken: "+corners.length);
Schrift.textContent = "Enter um zu starten";
counterText.textContent = ("Counter "+"0");
timer.textContent = "00:00:00";

function createLineUp() {
    var line = document.createElement("div");
    var playground = document.getElementById("playground");
    document.getElementById("point2").style.top = (pointY-80) + "px";
    line.classList.add("lineUp");
    line.style.left = (pointX+4) + "px";
    line.style.top = (pointY-76) + "px";
    playground.appendChild(line);
}
function createLineDown() {
    var line = document.createElement("div");
    var playground = document.getElementById("playground");
    document.getElementById("point2").style.top = (pointY+80) + "px";
    line.classList.add("lineDown");
    line.style.left = (pointX+4) + "px";
    line.style.top = (pointY+4) + "px";
    playground.appendChild(line);
}
function createLineLeft() {
    var line = document.createElement("div");
    var playground = document.getElementById("playground");
    document.getElementById("point2").style.left = (pointX-80) + "px";
    line.classList.add("lineLeft");
    line.style.left = (pointX-76) + "px";
    line.style.top = (pointY+4) + "px";
    playground.appendChild(line);
}
function createLineRight() {
    var line = document.createElement("div");
    var playground = document.getElementById("playground");
    document.getElementById("point2").style.left = (pointX+80) + "px";
    line.classList.add("lineRight");
    line.style.left = (pointX+4) + "px";
    line.style.top = (pointY+4) + "px";
    playground.appendChild(line);
}
function createDiagonalUpRight() {
    var line = document.createElement("div");
    var playground = document.getElementById("playground");
    document.getElementById("point2").style.top = (pointY-80) + "px";
    document.getElementById("point2").style.left = (pointX+80) + "px";
    line.classList.add("diagonalUpRight");
    line.style.left = (pointX+6) + "px";
    line.style.top = (pointY-76) + "px";
    playground.appendChild(line);
}
function createDiagonalUpLeft() {
    var line = document.createElement("div");
    var playground = document.getElementById("playground");
    document.getElementById("point2").style.top = (pointY-80) + "px";
    document.getElementById("point2").style.left = (pointX-80) + "px";
    line.classList.add("diagonalUpLeft");
    line.style.left = (pointX-76) + "px";
    line.style.top = (pointY-76) + "px";
    playground.appendChild(line);
}
function createDiagonalDownRight() {
    var line = document.createElement("div");
    var playground = document.getElementById("playground");
    document.getElementById("point2").style.top = (pointY+80) + "px";
    document.getElementById("point2").style.left = (pointX+80) + "px";
    line.classList.add("diagonalDownRight");
    line.style.left = (pointX+6) + "px";
    line.style.top = (pointY+4) + "px";
    playground.appendChild(line);
}
function createDiagonalDownLeft() {
    var line = document.createElement("div");
    var playground = document.getElementById("playground");
    document.getElementById("point2").style.top = (pointY+80) + "px";
    document.getElementById("point2").style.left = (pointX-80) + "px";
    line.classList.add("diagonalDownLeft");
    line.style.left = (pointX-76) + "px";
    line.style.top = (pointY+4) + "px";
    playground.appendChild(line);
}
document.addEventListener('keydown', function(event) {
    // 1 = hochrunter erlaubt
    // 2 = linksrechts erlaubt
    // 3 = diagonal erlaubt
    if(event.key == "Enter" && state == 0) {
        state = 1;
        Schrift.textContent = "Hoch oder Runter";
        stopTimer();
        startTimer();
        document.getElementById("ar_up").style.opacity = 1;
        document.getElementById("ar_down").style.opacity = 1;
        document.getElementById("circ").style.opacity = 1;
    }
});
function endGame() {
    Schrift.textContent = "Game Over";
    state = 0;
    endts = new Date().getTime();
    stopTimer();
    endscreen();
}

function isEndGame(currentState) {
    switch (currentState) {
        case 1:
            if ((corners.indexOf(currentCorner+11) > -1 && movePermission(currentCorner, currentCorner+11))||(corners.indexOf(currentCorner-11) > -1 && movePermission(currentCorner, currentCorner-11))) {
                console.log("move is allowed");
                document.getElementById("ar_up_left").style.opacity = 0.5;
                document.getElementById("ar_down_left").style.opacity = 0.5;
                document.getElementById("ar_up_right").style.opacity = 0.5;
                document.getElementById("ar_down_right").style.opacity = 0.5;
                document.getElementById("ar_up").style.opacity = 1;
                document.getElementById("ar_down").style.opacity = 1;
                return;
            }else{
                endGame();
            }
            break;
        case 2:
            if ((corners.indexOf(currentCorner+1) > -1 && movePermission(currentCorner, currentCorner+1))||(corners.indexOf(currentCorner-1) > -1 && movePermission(currentCorner, currentCorner-1))) {
                document.getElementById("ar_up").style.opacity = 0.5;
                document.getElementById("ar_down").style.opacity = 0.5;
                document.getElementById("ar_left").style.opacity = 1;
                document.getElementById("ar_right").style.opacity = 1;
                return;
            }else{
                endGame();
            }
            break;
        case 3:
            if ((corners.indexOf(currentCorner+12) > -1 && movePermission(currentCorner, currentCorner+12))||(corners.indexOf(currentCorner-12) > -1 && movePermission(currentCorner, currentCorner-12))(corners.indexOf(currentCorner+10) > -1 && movePermission(currentCorner, currentCorner+10))||(corners.indexOf(currentCorner-10) > -1 && movePermission(currentCorner, currentCorner-10))) {
                console.log("move is allowed");
                document.getElementById("ar_left").style.opacity = 0.5;
                document.getElementById("ar_right").style.opacity = 0.5;
                document.getElementById("ar_up_left").style.opacity = 1;
                document.getElementById("ar_down_left").style.opacity = 1;
                document.getElementById("ar_up_right").style.opacity = 1;
                document.getElementById("ar_down_right").style.opacity = 1;

                return;
            }else{
                endGame();
            }
            break;
    }
}
function keyDown(){
    if(state == 1 && pointY < 795){
        var destinationCorner = currentCorner + 11;
        if (corners.indexOf(destinationCorner) > -1 && movePermission(currentCorner, destinationCorner)){
            moves.push([currentCorner, destinationCorner], [destinationCorner, currentCorner]);
            createLineDown();
            currentCorner = destinationCorner;
            pointY += 80;
            counter++;
            counterText.textContent = ("Counter "+counter);
            Schrift.textContent = "Links oder Rechts";
            state = 2;
            isEndGame(state);
        }
    }
};
function keyUp(){
    if(state == 1 && pointY > -5){
        var destinationCorner = currentCorner - 11;
        if (corners.indexOf(destinationCorner) > -1 && movePermission(currentCorner, destinationCorner)){
            moves.push([currentCorner, destinationCorner], [destinationCorner, currentCorner]);
            createLineUp();
            currentCorner = destinationCorner;
            pointY -= 80;
            counter++;
            counterText.textContent = ("Counter "+counter);
            Schrift.textContent = "Links oder Rechts";
            state = 2;
            isEndGame(state);
        }
    }
};
function keyLeft(){
    if(state == 2 && pointX > -3){
        var destinationCorner = currentCorner - 1;
        if (corners.indexOf(destinationCorner) > -1 && movePermission(currentCorner, destinationCorner)){
            moves.push([currentCorner, destinationCorner], [destinationCorner, currentCorner]);
            createLineLeft();
            currentCorner = destinationCorner;
            pointX -= 80;
            counter++;
            counterText.textContent = ("Counter "+counter);
            Schrift.textContent = "Diagonal";
            state = 3;
            isEndGame(state);
        }
    }
};
function keyRight(){
    if(state == 2 && pointX < 797){
        var destinationCorner = currentCorner + 1;
        if (corners.indexOf(destinationCorner) > -1 && movePermission(currentCorner, destinationCorner)){
            moves.push([currentCorner, destinationCorner], [destinationCorner, currentCorner]);
            createLineRight();
            currentCorner = destinationCorner;
            pointX += 80;
            counter++;
            counterText.textContent = ("Counter "+counter);
            Schrift.textContent = "Diagonal";
            state = 3;
            isEndGame(state);
        }
    }
};
function keyUpRight(){
    if(state == 3 && pointY > -5 && pointX < 797){
        var destinationCorner = currentCorner - 10;
        if (corners.indexOf(destinationCorner) > -1 && movePermission(currentCorner, destinationCorner)){
            moves.push([currentCorner, destinationCorner], [destinationCorner, currentCorner]);
            createDiagonalUpRight();
            currentCorner = destinationCorner;
            pointY -= 80;
            pointX += 80;
            counter++;
            counterText.textContent = ("Counter "+counter);
            Schrift.textContent = "Hoch oder Runter";
            state = 1;
            isEndGame(state);
        }
    }
};
function keyUpLeft(){
    if(state == 3 && pointY > -5 && pointX > -3){
        var destinationCorner = currentCorner - 12;
        if (corners.indexOf(destinationCorner) > -1 && movePermission(currentCorner, destinationCorner)){
            moves.push([currentCorner, destinationCorner], [destinationCorner, currentCorner]);
            createDiagonalUpLeft();
            currentCorner = destinationCorner;
            pointY -= 80;
            pointX -= 80;
            counter++;
            counterText.textContent = ("Counter "+counter);
            Schrift.textContent = "Hoch oder Runter";
            state = 1;
            isEndGame(state);
        }
    }
};
function keyDownRight(){
    if(state == 3 && pointY < 795 && pointX < 797){
        var destinationCorner = currentCorner + 12;
        if (corners.indexOf(destinationCorner) > -1 && movePermission(currentCorner, destinationCorner)){
            moves.push([currentCorner, destinationCorner], [destinationCorner, currentCorner]);
            createDiagonalDownRight();
            currentCorner = destinationCorner;
            pointY += 80;
            pointX += 80;
            counter++;
            counterText.textContent = ("Counter "+counter);
            Schrift.textContent = "Hoch oder Runter";
            state = 1;
            isEndGame(state);
        }
    }
};
function keyDownLeft(){
    if(state == 3 && pointY < 795 && pointX > -3){
        var destinationCorner = currentCorner + 10;
        if (corners.indexOf(destinationCorner) > -1 && movePermission(currentCorner, destinationCorner)){
            moves.push([currentCorner, destinationCorner], [destinationCorner, currentCorner]);
            createDiagonalDownLeft();
            currentCorner = destinationCorner;
            pointY += 80;
            pointX -= 80;
            counter++;
            counterText.textContent = ("Counter "+counter);
            Schrift.textContent = "Hoch oder Runter";
            state = 1;
            isEndGame(state);
        }
    }
};

var timerInterval;
var startTime;
var isTimerRunning = false;

function updateTimer() {
    beginnts = new Date().getTime();
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;

    var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("timer").innerText = hours + ":" + minutes + ":" + seconds;
}

function startTimer() {
    if (!isTimerRunning) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTimer, 1000);
        isTimerRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    let endts = new Date().getTime();
}
function endscreen(){
    var endscreen = document.getElementById("endscreen");
    endscreen.style.display = "flex";
    document.getElementById("score").textContent = ("Counter: "+counter);
    document.getElementById("time").textContent = ("Time: "+document.getElementById("timer").textContent);
    document.getElementById("avlbcorners").textContent = ("Erreichbare Ecken: ");
};


function sendScore(){
    const sendavlbcorners = corners.length;
    const sendcounter = counter;
    const sendtime = endts - beginnts;
    const sendusername = document.getElementById("username").value;

    const url = `/SREU_TPHEU/send?username=${sendusername}&score=${sendcounter}&time=${sendtime}&avlbcorners=${sendavlbcorners}`;
    console.log(url);
    window.location.href = url;
}


