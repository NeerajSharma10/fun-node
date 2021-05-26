let fs = require("fs");
let path = require("path");

function organizeFn(dirPath)
{
    //Pseudo Code 
    // 1. Input -> directory path given 
    let destPath;

    if(dirPath == undefined)
    {
        // console.log("Kindly enter the path ");
        destPath = process.cwd();
        return;
    }
    else
    {
        if(fs.existsSync(dirPath))
        {
            // 2. Create -> organized_files -> directory
            destPath = path.join(dirPath,"organized_files");
            if(fs.existsSync(destPath)==false)
            {
                fs.mkdirSync(destPath);
            }


        }
        else
        {
            console.log("Kindly enter the correct path");
            return;
        }
        
    }

    organizeHelper(dirPath,destPath);

   
    

}


function organizeHelper(src, dest)
{
    // 3. identiyfy category of all the files present in that input directory  -> 

    let childNames = fs.readdirSync(src);  // it gives names only 
    // console.log(childNames);

    for(let i=0;i<childNames.length;i++)
    {
        let childAddress = path.join(src,childNames[i]);
        let isfile = fs.lstatSync(childAddress).isFile();
        if(isfile)
        {
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            // console.log(childNames[i],"-----> ",category);
            // 4. copy / cut files to that organized directory 

            sendFiles(childAddress,dest,category);


        }
    }

    




}

function sendFiles(srcFilePath,dest,category)
{
    let categorypath = path.join(dest,category);
    if(fs.existsSync(categorypath) == false)
    {
        fs.mkdirSync(categorypath);
    }

    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categorypath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    //for cut operation 
    // fs.unlinkSync(srcFilePath);
    console.log(fileName,"copied to --> ",category);

}

function getCategory(name)
{
    let ext = path.extname(name);
    // console.log(ext);

    ext = ext.slice(1);
    for(let type in types)
    {
        let cTypeArray = types[type];
        for(let i=0;i<cTypeArray.length;i++)
        {
            if(ext == cTypeArray[i])
            {
                return type;
            }
        }

    }
    return "others";
}


module.exports = {
    organizeKey : organizeFn
}