const url = "./data/prices.json";

async function getPriceData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        populateTable(data);
        populateMobileTable(data);
    }
    catch (error) {
        console.error("Failed to get data: ", error);
    }
}

function populateTable(data) {
    const tableBody = document.querySelector('.rental-pricing');
    let output = "";
    let imgNumber = 0;
    for (let entry of data.prices){
        imgNumber++;        
        output +=`
            <tr>
                <td><img class="flex-img" src="./images/vehicle-img${imgNumber}.webp" alt="Image of ${entry.type}"></td>
                <td>${entry.type}</td>
                <td>${entry.capacity}</td>
                <td>${entry.rHalfday}</td>
                <td>${entry.rFullday}</td>
                <td>${entry.wHalfday}</td>
                <td>${entry.wFullday}</td>
            </tr>
        `;
    }
    tableBody.innerHTML = output;
}

function populateMobileTable(data) {
    const mtableBody = document.querySelector('.m-rental-pricing');
    let output = "";
    let imgNumber = 0;
    for (let entry of data.prices){
        imgNumber++;        
        output +=`
            <tr>
            <td colspan="2"><strong>${entry.type}</strong></td>
            </tr>

            <tr>
            <td colspan="2"><img class="flex-img" src="./images/vehicle-img${imgNumber}.webp" alt="Image of ${entry.type}"></td>
            </tr>

            <tr>
            <td>Max. Persons</td>
            <td>${entry.capacity}</td>
            </tr>

            <tr>
            <td rowspan="2">Reservation</td>
            <td rowspan="1">Half-day (3h): ${entry.rHalfday}</td>
            </tr>
            <tr>
            <td rowspan="1">Full day: ${entry.rFullday}</td>
            </tr>
            
            <tr>
            <td rowspan="2" id="walkin">Walk-in</td>
            <td rowspan="1">Half-day (3h): ${entry.wHalfday}</td>            
            </tr>
            <tr>
            <td rowspan="1">Full day: ${entry.wFullday}</td>
            </tr>
        `;
    }
    mtableBody.innerHTML = output;
}

getPriceData();