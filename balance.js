const fs = require('fs')
const { Table }= require('console-table-printer')
const [,,data] = process.argv

if(data == 'more' || data == 'info'){
    fs.readFile('./database/income.json', (err,datas) => {
        if(err) throw err
        let sum1 = JSON.parse(datas)
        fs.readFile('./database/expanse.json', (err,datas) => {
            if(err) throw err
            let sum2 = JSON.parse(datas)
            let result = 0
            let answer = 0
            for(let val of sum1){
                result += +val.cost
            }
            for(let el of sum2){
                answer += +el.cost
            }

            console.log('Total balance');
            const p = new Table({
                columns: [
                    {name:'income',alignment:'center'},
                    {name:'expanse',alignment:'center'},
                    {name:'total',alignment:'center'}
                ]
            })       
            p.addRow({ income: '$'+result, expanse: '$'+answer, total: '$'+(result-answer)}, { color: 'yellow' });   
            p.printTable();
            fs.readFile('./database/income.json', 'utf-8', (err,data) => {
                if(err) throw err
                console.log('Income info');
                let res = JSON.parse(data)
                const a = new Table({
                    columns: [
                        {name:'description',alignment:'center'},
                        {name:'cost',alignment:'center'},
                        {name:'time',alignment:'center'}
                    ]
                })
                for(let val of res){
                    a.addRow({ description: val.purpose, cost: '$'+val.cost, time: val.data.slice(0,10)}, { color: 'green' }); 
                }
                a.printTable();
                fs.readFile('./database/expanse.json', (err,data) => {
                    if(err) throw err
                    console.log('Expanse info');
                    let res = JSON.parse(data)
                    const e = new Table({
                    columns: [
                        {name:'description',alignment:'center'},
                        {name:'cost',alignment:'center'},
                        {name:'time',alignment:'center'}
                    ]
                    })
                    for(let val of res){
                        e.addRow({ description: val.purpose, cost: '$'+val.cost, time: val.data.slice(0,10)}, { color: 'red' }); 
                    }
                    e.printTable();
                })
            })
        })
    })
}else{
    fs.readFile('./database/income.json', (err,datas) => {
    if(err) throw err
    let sum1 = JSON.parse(datas)
    fs.readFile('./database/expanse.json', (err,datas) => {
        if(err) throw err
        let sum2 = JSON.parse(datas)
        let result = 0
        let answer = 0
        for(let val of sum1){
            result += +val.cost
        }
        for(let el of sum2){
            answer += +el.cost
        }
        console.log('Total balance');
        const p = new Table({
            columns: [
                {name:'income',alignment:'center'},
                {name:'expanse',alignment:'center'},
                {name:'total',alignment:'center'}
            ]
        })       
        p.addRow({ income: '$'+result, expanse: '$'+answer, total: '$'+(result-answer)}, { color: 'yellow' });   
        p.printTable();
    })
})
}











