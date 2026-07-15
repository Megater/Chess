

//arrey of cells
const cells = new Array();




var chessboard = document.getElementById("chessboard");
var space = 1;
var counter = 0;

//Creating of chessboard ->>
for(var row = 0; row < 8; row++) {
    var rowEl = document.createElement("tr");
    for (var cell = 0; cell < 8; cell++) {
        var cellEl = document.createElement("td");
        cellEl.className = space;
        if ((space + row) % 2 == 1) {
            cellEl.style.backgroundColor = "#e2e2e2";

        } else {
            cellEl.style.backgroundColor = "#707070";
        }

        rowEl.appendChild(cellEl);

        space++;
    }

    chessboard.appendChild(rowEl);
}

//Giving classes to pieces
function setPlaceData(el,color,type) {
    el.className = " ";
    el.classList.add(color);
    el.classList.add(type);
}

//Getting cells into array
for(var i = 1; i<=64; i++){
    var foundcell = document.getElementsByClassName(String(i))[0];
    cells.push(foundcell);
}
//console.log(cells);



// Czarne figury (b)

const King_b   = document.getElementById("king_b");
const Queen_b  = document.getElementById("queen_b");

const Bishop_b = document.getElementById("bishop_b");
const Bishop_b2 = document.getElementById("bishop_b2");

const Knight_b = document.getElementById("knight_b");
const Knight_b2 = document.getElementById("knight_b2");

const Rook_b   = document.getElementById("rook_b");
const Rook_b2   = document.getElementById("rook_b2");

const Pawn_b   = document.getElementById("pawn_b");
const Pawn_b2   = document.getElementById("pawn_b2");
const Pawn_b3   = document.getElementById("pawn_b3");
const Pawn_b4   = document.getElementById("pawn_b4");
const Pawn_b5   = document.getElementById("pawn_b5");
const Pawn_b6   = document.getElementById("pawn_b6");
const Pawn_b7   = document.getElementById("pawn_b7");
const Pawn_b8   = document.getElementById("pawn_b8");



// Białe figury (w)

const King_w   = document.getElementById("king_w");
const Queen_w  = document.getElementById("queen_w");

const Bishop_w = document.getElementById("bishop_w");
const Bishop_w2 = document.getElementById("bishop_w2");

const Knight_w = document.getElementById("knight_w");
const Knight_w2 = document.getElementById("knight_w2");

const Rook_w   = document.getElementById("rook_w");
const Rook_w2   = document.getElementById("rook_w2");

const Pawn_w   = document.getElementById("pawn_w");
const Pawn_w2   = document.getElementById("pawn_w2");
const Pawn_w3   = document.getElementById("pawn_w3");
const Pawn_w4   = document.getElementById("pawn_w4");
const Pawn_w5   = document.getElementById("pawn_w5");
const Pawn_w6   = document.getElementById("pawn_w6");
const Pawn_w7   = document.getElementById("pawn_w7");
const Pawn_w8   = document.getElementById("pawn_w8");











//Getting pieces into right cells [entry position] :

//black position
cells[0].appendChild(Rook_b);
cells[1].appendChild(Knight_b);
cells[2].appendChild(Bishop_b);
cells[3].appendChild(Queen_b);
cells[4].appendChild(King_b);
cells[5].appendChild(Bishop_b2);
cells[6].appendChild(Knight_b2);
cells[7].appendChild(Rook_b2);
cells[8].appendChild(Pawn_b);
cells[9].appendChild(Pawn_b2);
cells[10].appendChild(Pawn_b3);
cells[11].appendChild(Pawn_b4);
cells[12].appendChild(Pawn_b5);
cells[13].appendChild(Pawn_b6);
cells[14].appendChild(Pawn_b7);
cells[15].appendChild(Pawn_b8);

//white position
cells[48].appendChild(Pawn_w);
cells[49].appendChild(Pawn_w2);
cells[50].appendChild(Pawn_w3);
cells[51].appendChild(Pawn_w4);
cells[52].appendChild(Pawn_w5);
cells[53].appendChild(Pawn_w6);
cells[54].appendChild(Pawn_w7);
cells[55].appendChild(Pawn_w8);
cells[56].appendChild(Rook_w);
cells[57].appendChild(Knight_w);
cells[58].appendChild(Bishop_w);
cells[59].appendChild(Queen_w);
cells[60].appendChild(King_w);
cells[61].appendChild(Bishop_w2);
cells[62].appendChild(Knight_w2);
cells[63].appendChild(Rook_w2);









