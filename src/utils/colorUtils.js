export function colorEvenRows() {
    var table = document.querySelector('.players-table');
    var rows = table.getElementsByTagName('tr');

    for (var i = 1; i < rows.length; i++) {
        if (i % 2 === 0) {
            rows[i].style.backgroundColor = '#f2f2f2';
        } else {
            rows[i].style.backgroundColor = '';
        }
    }
}

export function colorOddRows() {
    var table = document.querySelector('.players-table');
    var rows = table.getElementsByTagName('tr');

    for (var i = 1; i < rows.length; i++) {
        if (i % 2 !== 0) {
            rows[i].style.backgroundColor = '#f2f2f2';
        } else {
            rows[i].style.backgroundColor = '';
        }
    }
}
