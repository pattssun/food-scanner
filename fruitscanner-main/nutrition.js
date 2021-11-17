const fs = require('fs');
let data = fs.readFile('fruits.json', (err,data) =>{
    if (err){
        console.log("error")
    }
    else{
        let fruit = JSON.parse(data);
        console.log(fruit);
    }
})
