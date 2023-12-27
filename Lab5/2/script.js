    generateColorTable();

    updateSelectedColor();

function generateColorTable() {
    var table = document.getElementById("colorTable");
    var counter = 1;

    for (var i = 0; i < 6; i++) {
        var row = table.insertRow();
        for (var j = 0; j < 6; j++) {
            var cell = row.insertCell();
            cell.textContent = counter++;
            
            cell.addEventListener("mouseover", function () {
                if (this.textContent == 29) {
                    this.style.backgroundColor = getRandomColor();
                }
            });

            cell.addEventListener("click", function () {
                if (this.textContent == 29) {
                this.classList.toggle("selected");
                this.style.backgroundColor = document.getElementById("colorPicker").value;
                }
            });

            cell.addEventListener("dblclick", function () {
                if (this.textContent == 29) {
                var columnIndex = this.cellIndex;
                console.log(columnIndex)
                var rows = document.getElementById("colorTable").rows;

                for (var i = 0; i < rows.length; i+=2) {
                    var cells = rows[i].cells;
                   
                        cells[columnIndex].classList.toggle("selected");
                        cells[columnIndex].style.backgroundColor = document.getElementById("colorPicker").value;
                    
                }
            }
            });
        }
    }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateSelectedColor() {
    var colorPicker = document.getElementById("colorPicker");
    var selectedCells = document.querySelectorAll(".selected");

    selectedCells.forEach(function (cell) {
        cell.style.backgroundColor = colorPicker.value;
    });
}
