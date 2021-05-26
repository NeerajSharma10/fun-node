let fs = require("fs");
let path = require("path");

function treeFn(dirPath)
{
    // console.log("Tree Command implemented",dirPath);

    
    if(dirPath == undefined)
    {
        // console.log("Kindly enter the path ");
        treeHelper(process.cwd(),"");
    }
    else
    {
        if(fs.existsSync(dirPath))
        {
            treeHelper(dirPath,"");
        }
        else
        {
            console.log("Kindly enter the correct path");
            return;
        }
        
    }

}


function treeHelper(dirPath,indent)
{
    //check file or folder 
    let isFile = fs.lstatSync(dirPath).isFile();

    if(isFile)     // for file 
    {
        let fileName = path.basename(dirPath);
        console.log(indent + "|___"+fileName);
    }
    else                                 //  for folder 
    {
        let dirName = path.basename(dirPath);
        console.log(indent + "||----"+dirPath);
        let childrens = fs.readdirSync(dirPath);
        for(let i=0;i<childrens.length;i++)
        {
            let childPath = path.join(dirPath,childrens[i]);
            treeHelper(childPath,indent + "\t");
        }        
    }
}



module.exports = {
    treeKey : treeFn
}