const { isUtf8 } = require('buffer');
const fs= require('fs');
data ="HareKrsna"

fs.writeFile('a.txt',data,'utf-8',()=>{console.log("file is now written")});
