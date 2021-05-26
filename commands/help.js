

//help Implemented 

function helpFn()
{
    // console.log("help Command implemented");
    console.log(`
    List of all commands:
    1. node main.js tree "directoryPath"
    2. node main.js organize "directoryPath"
    3. node main.js help "directoryPath"    
    `);
}



module.exports = {
    helpKey: helpFn
}