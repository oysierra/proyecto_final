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
