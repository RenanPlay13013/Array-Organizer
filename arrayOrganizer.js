const path = require("path");
const fs = require("fs")

function arrayOrganizer() { 

var allSeedsArray = [
    
];

function flatternArray(arr) { 
    return arr.flat(Infinity);
}

const flatArray = [...new Set(flatternArray(allSeedsArray))];

const filePath = path.join(__dirname, "arrayOrganizerOutput.txt");

fs.writeFile(filePath, flatArray.join("\n"), (err) => { 
    if (err) { 
        console.error("❌ Erro ao Escrever o arquivo: ", err)
        return;
    }

    console.log(`✅ Array Organizado com sucesso, Quantia de seeds organizadas: ${allSeedsArray.length}`)
})

}

module.exports = arrayOrganizer;