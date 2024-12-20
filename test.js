function createCalendar(elem, year, month) {
    // debugger;
    let table = document.createElement('table');
    let date = new Date(year, month - 1);
    let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    // Create heading
    let headingRow = document.createElement('tr');
    for(let i = 0; i < days.length; i++) {
        let heading = document.createElement('th');
        heading.textContent = days[i];
        headingRow.append(heading);
    }
    table.append(headingRow);

    // Create calendar days
    let monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let lastDay = monthEnd.getDate();
    let createRow = true;
    let dataRow;
    let beforeGaps;
    let afterGaps;
    let totalCells;
    let day = 1;

    if(date.getDay() == 0) {
        beforeGaps = 6;
    } else if(date.getDay() == 1) {
        beforeGaps = 0;
    } else {
        beforeGaps = date.getDay() - 1;
    }

    if(monthEnd.getDay() == 0) {
        afterGaps = 0;
    } else {
        afterGaps = 7 - monthEnd.getDay();
    }

    totalCells = beforeGaps + lastDay + afterGaps;

    for(let i = 1; i <= totalCells; i++) {
        if(createRow) {
            dataRow = document.createElement('tr');
            createRow = false;
        }

        let data = document.createElement('td');
        data.textContent = i <= beforeGaps || i > beforeGaps + lastDay ? '' : day++;
        dataRow.append(data);

        // Append the data row to the table
        if(i%7 == 0) {
            table.append(dataRow);
            createRow = true;
        }
    }
    
    // Append table to the container
    elem.append(table);
}

createCalendar(calendar, 2001, 9);