// Select color input
const colorPicker = $('#colorPicker');
// Select size input
const sizePicker = $('#sizePicker');
const pixelCanvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
$('#submitGrid').on('click', (e) => {
    e.preventDefault();
    pixelCanvas.empty();
    const gridHeight = sizePicker[0][0].value;
    const gridWidth = sizePicker[0][1].value;
    makeGrid(gridHeight, gridWidth);
});

function makeGrid(height, width) {
    for (let row = 1; row <= height; row++) {
        let tableRow = `<tr class="row" id="row${row}"></tr>`;
        $('#pixelCanvas').append(tableRow);
        for (let col = 1; col <= width; col++) {
            let tableCol = `<td class="cell" id="cell${row}-${col}"></td>`;
            $(`#row${row}`).append(tableCol);
        }
    }

    $('.cell').on('click', (e) => {
        let id = e.target.id;
        $(`#${id}`).css('background', colorPicker.val());     
        setTimeout(waitForGrid, 1000);
    });
}