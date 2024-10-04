const fs = require("fs")
const path = require("path");
const arrayOrganizer  = require("./arrayOrganizer");

const commandSepareToggle = true

arrayOrganizer()
const filePath = path.join(__dirname, "arrayOrganizerOutput.txt");

fs.readFile(filePath, "utf8", (err, data) => { 
    if (err) { 
        console.error("❌ Erro ao ler o arquivo: ", err)
    }

    const materials = data.split("\n").map(item => item.trim()).filter(item => item !== "");
    console.log("✅ Materiais Importados com sucess")



    function getSeedMaterial(string) { 
        return string.replace(/^mysticalagriculture:|_seeds$/g, "");
    }
    
    if (commandSepareToggle) { 

        var resultado = materials.map(seed => getSeedMaterial(seed)).join(",\n");
    } else { 
        var resultado = materials.map(seed => getSeedMaterial(seed)).join("\n");
    }
    
    const content = resultado
    
    fs.writeFile("seedMaterials.txt", content, (err) => { 
        if (err) { 
            console.error("❌ Erro ao escrever o arquivo: ", err)
            return;
        }
    
        console.log("✅ Arquivo escrito com sucesso")
    })
})

