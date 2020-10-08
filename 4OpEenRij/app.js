// DOM Elementen
const allCells = document.querySelectorAll('.cell:not(.row-top)');
const topCells = document.querySelectorAll('.cell.row-top');
const opnieuwButton = document.querySelector('.opnieuw');
const stoppenButton = document.querySelector('.stoppen')
const statusSpan = document.querySelector('.status');

// kolommen
const column0 = [allCells[35], allCells[28], allCells[21], allCells[14], allCells[7], allCells[0], topCells[0]];
const column1 = [allCells[36], allCells[29], allCells[22], allCells[15], allCells[8], allCells[1], topCells[1]];
const column2 = [allCells[37], allCells[30], allCells[23], allCells[16], allCells[9], allCells[2], topCells[2]];
const column3 = [allCells[38], allCells[31], allCells[24], allCells[17], allCells[10], allCells[3], topCells[3]];
const column4 = [allCells[39], allCells[32], allCells[25], allCells[18], allCells[11], allCells[4], topCells[4]];
const column5 = [allCells[40], allCells[33], allCells[26], allCells[19], allCells[12], allCells[5], topCells[5]];
const column6 = [allCells[41], allCells[34], allCells[27], allCells[20], allCells[13], allCells[6], topCells[6]];
const columns = [column0, column1, column2, column3, column4, column5, column6];


// rijen
const topRow = [topCells[0], topCells[1], topCells[2], topCells[3], topCells[4], topCells[5], topCells[6]];
const row0 = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6]];
const row1 = [allCells[7], allCells[8], allCells[9], allCells[10], allCells[11], allCells[12], allCells[13]];
const row2 = [allCells[14], allCells[15], allCells[16], allCells[17], allCells[18], allCells[19], allCells[20]];
const row3 = [allCells[21], allCells[22], allCells[23], allCells[24], allCells[25], allCells[26], allCells[27]];
const row4 = [allCells[28], allCells[29], allCells[30], allCells[31], allCells[32], allCells[33], allCells[34]];
const row5 = [allCells[35], allCells[36], allCells[37], allCells[38], allCells[39], allCells[40], allCells[41]];
const rows = [row0, row1, row2, row3, row4, row5, topRow];

// variabelen
let gameIsLive = true
let blueIsNext = true

//Functions
const getClassListArray = (cell) => {
    const classlist = cell.classList;
    return [...classlist];
}
const getCellLocation = (cell) => {
    const classList = getClassListArray(cell);
    //dit loopt door elke klasse in de classlistarray en het zal de className terug geven die de "row" en "col" class heeft
    const rowClass = classList.find(className => className.includes('row'));
    const colClass = classList.find(className => className.includes('col'));
    const rowIndex = rowClass[4];
    const colIndex = colClass[4];
    const rowNumber = parseInt(rowIndex)
    const colNumber = parseInt(colIndex)
    //de parse functie zorgt ervoor dat een string argument een integer wordt

    return [rowNumber, colNumber];
    //nu krijgen we een array met een rowNumber en een kolomNummer bij de console log.
};

// Event handlers zorgen dat de functies kunnen gezien/gecodeert worden
const handleCellMouseOver = (e)=> {
    const cell = e.target;
    const [rowIndex, colIndex] = getCellLocation(cell);

    const topCell = topCells[colIndex];
    if (blueIsNext) {
        topCell.classList.add('blue');
    } else {
        topCell.classList.add('pink');
    }
    //Als je nu hovert over de cells dan verschijnt er een kleur op de 0 rij
};
const handleCellMouseOut = (e)=> {
    const cell = e.target;
    const [rowIndex, colIndex] = getCellLocation(cell);

    const topCell = topCells[colIndex]
    topCell.classList.remove('blue')
    topCell.classList.remove('pink')
    //Nu elke keer dat je Hovert over het bord dan zal het fiche ook weg gaan

//Console Log
    const classlist = cell.classList;
    console.log([...classlist]);
    //elke keer als je over een cell gaat dan zie je dat in de console log netjes naast elkaar.
};

// Even Listeners roepen de functie aan
for(const row of rows) {
    for (const cell of row) {
        cell.addEventListener('mouseover', handleCellMouseOver);
        cell.addEventListener('mouseout', handleCellMouseOut);
    }
}
