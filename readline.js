const readline= require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout

});

function askName(){
    rl.question("Whats your name?",function(name){
        console.log(`hello,${name}`)
        askFavLang()
    });
    
}
function askFavLang(){
    rl.question("Whats your favourite programming language?",function(language){
        console.log(` ${language} is a great choice`)
        rl.close()
    }); 
}
console.log("welcome to commandline interface")
askName()