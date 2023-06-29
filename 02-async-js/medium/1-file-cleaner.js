function cleanFile(err,data){
    console.log(data.replace(/\s\s+/g,' '));
    fs.writeFile('a.txt',data.replace(/\s\s+/g,' '),'utf-8',(err) => {
        if (err) throw err;
        console.log('The file has been saved!')
})
}

const fs= require('fs');

fs.readFile('a.txt','utf-8',cleanFile);
