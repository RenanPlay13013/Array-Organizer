const path = require("path");
const fs = require("fs")

function arrayOrganizer() { 
    
    const commandSepareToggle = true

var allSeedsArray = [
    
];

function flatternArray(arr) { 
    return arr.flat(Infinity);
}

var flatArray = [...new Set(flatternArray(allSeedsArray))];

const filePath = path.join(__dirname, "arrayOrganizerOutput.txt");

if (commandSepareToggle) { 

    fs.writeFile(filePath, flatArray.map(item => `"${item}"`).join(",\n"), (err) => { 
        if (err) { 
            console.error("❌ Erro ao Escrever o arquivo: ", err)
            return;
        }
    
        console.log(`✅ Array Organizado com sucesso, Quantia de seeds organizadas: ${allSeedsArray.length}`)
    })
} else {
fs.writeFile(filePath, flatArray.join("\n"), (err) => { 
    if (err) { 
        console.error("❌ Erro ao Escrever o arquivo: ", err)
        return;
    }

    console.log(`✅ Array Organizado com sucesso, Quantia de seeds organizadas: ${allSeedsArray.length}`)
})
}
}

module.exports = arrayOrganizer;