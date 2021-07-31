const fs = require('fs')
const [,,purpose,cost] = process.argv
if(purpose == undefined && cost == undefined){
    throw new Error('malumot kiriting')
}
fs.readFile('./database/income.json', (err,data) => {
    if(err) throw err
    let dataArray = data.toString()
    if(!dataArray){
        let array = [
            {purpose,cost,data:new Date()}
        ]
        fs.writeFile('./database/income.json', JSON.stringify(array,null,4), err => {
            if(err) throw err
            console.log('malumot yozildi');
        })
    }else{
        let array = JSON.parse(dataArray)
        array.push({purpose,cost,data:new Date()})
        fs.writeFile('./database/income.json', JSON.stringify(array,null,4),err => {
            if(err) throw err
            console.log('malumot yozildi');
        })
    }
})

