require('colors')
const fs = require('fs');
const readline = require('readline');
const JavaScriptObfuscator = require('javascript-obfuscator')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Path: '.rainbow, (answer) => {
    fs.readFile(`${answer}`, "utf-8", function (err, data) {
        if (err) throw err;
        var obfuscationResult = JavaScriptObfuscator.obfuscate(data)

        fs.writeFile(`${answer}`, obfuscationResult.getObfuscatedCode(), function (err) {
            if (err) throw err;
            console.log(`Path: ${answer} File Saved!`.rainbow);
        });
    });
    rl.close();
})