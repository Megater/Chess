var chessboard = document.getElementById("chessboard");
var space = 1;


for(var row = 0; row < 8; row++) {
    var rowEl = document.createElement("tr");
    for (var cell = 0; cell < 8; cell++) {
        var cellEl = document.createElement("td");
        cellEl.className = space;
        if ((space + row) % 2 == 1) {
            cellEl.style.backgroundColor = "white";
        } else {
            cellEl.style.backgroundColor = "black";
        }
        rowEl.appendChild(cellEl);
        space++;
    }
    chessboard.appendChild(rowEl);
}

function setPlaceData(el,color,type) {
    el.className = " ";
    el.classList.add(color);
    el.classList.add(type);
}