const table = document.createElement("table");
const headerRow = document.createElement("tr");
//Adds the table for the HTML file to display on screen.
document.getElementById("table-container").appendChild(table);

const firstRow = ["Ironclad", "Silent", "Defect", "Watcher"];

// Array of the data I want to display.
  const data = [
    { relic1: "Burning Blood", relic2: "Ring of the Snakes", relic3: "Cracked Core", relic4: "Pure Water"},
    { relic1: "Red Skull", relic2: "Snecko Skull", relic3: "Data Disk", relic4: "Damaru"},
    { relic1: "Self-Forming Clay", relic2:"Ninja Scroll", relic3: "Gold-Plated Cables", relic4: "Duality"},
    { relic1: "Brimstone", relic2:"Paper Krane", relic3: "Symbiotic Virus", relic4: "Teardrop Locket"},
    { relic1: "Magic Flower", relic2:"The Specimen", relic3: "Emotion Chip", relic4: "Cloak Clasp"},
    { relic1: "Runic Cube", relic2:"Tough Bandages", relic3: "Inserter", relic4: "Golden Eye"},
    { relic1: "Black Blood", relic2:"Burning Blood", relic3: "", relic4: "Holy Water"},
    { relic1: "Mark of Pain", relic2:"", relic3:"", relic4:""}
  ];

//Goes through each relic in the array.
  firstRow.forEach(text => {
    const th = document.createElement("th");
    //Puts `firstRow` text into the row.
    th.textContent = text;
    //Puts the <th> element inside the <tr> element.
    headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

  //
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement("tr");
    //Goes through each values in the `data` array and ignores the `relicx` text.
    Object.values(data[i]).forEach(value => {
        //Creates cells
        const cell = document.createElement("td");
        //Connects the text to cells.
        cell.textContent = value;
        //Puts the cells inside the rows.
        row.appendChild(cell);
    });
    //Puts the rows in the table.
    table.appendChild(row);
  };