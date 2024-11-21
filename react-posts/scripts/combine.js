const fs = require("fs"); // Módulo para manejar archivos
const path = require("path"); // Módulo para manejar rutas de archivos

// Ruta donde se encuentran los archivos generados por el build
const jsFolder = path.join(__dirname, "..", "build", "static", "js");

// Ruta donde queremos guardar el archivo combinado
const outputFolder = path.join(__dirname, "..", "..", "landing", "static", "js"); // Correcta

// Obtener todos los archivos .js generados
const files = fs.readdirSync(jsFolder).filter(file => file.endsWith(".js"));

// Crear una cadena con el contenido combinado de todos los archivos
let combinedContent = "";
files.forEach(file => {
    const filePath = path.join(jsFolder, file); // Ruta completa del archivo actual
    combinedContent += fs.readFileSync(filePath, "utf8") + "\n"; // Leer y añadir el contenido
});

// Asegurarse de que la carpeta de salida exista
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true }); // Crear la carpeta si no existe
}

// Guardar el contenido combinado en un nuevo archivo llamado `posts_bundle.js`
const outputPath = path.join(outputFolder, "posts_bundle.js");
fs.writeFileSync(outputPath, combinedContent, "utf8"); // Escribir el archivo

console.log("posts_bundle.js creado correctamente en:", outputPath);
