// src/utils.js

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

export function filterRecords(start, end) {
    var table = document.querySelector('.players-table');
    var rows = table.getElementsByTagName('tr');

    for (var i = 1; i < rows.length; i++) {
        var playerNumber = parseInt(rows[i].getElementsByTagName('td')[0].innerText);

        if (playerNumber >= start && playerNumber <= end) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

export function filterTable() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var table = document.querySelector('.players-table');
    var rows = table.getElementsByTagName('tr');

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        var shouldDisplay = false;

        for (var j = 0; j < cells.length; j++) {
            var cellText = cells[j].innerText || cells[j].textContent;

            if (cellText.toUpperCase().indexOf(filter) > -1) {
                shouldDisplay = true;
                break;
            }
        }

        if (shouldDisplay) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}
