// 数据必须同步，
const https = require('https');
const cheerio = require('cheerio');
require('colors')
const options = {
    protocol:'https:',
    host:'www.microsoftstore.com.cn',
    port:'443',
    method:'GET',
    path:'/'
}

function filterData(dataSourse) {
    let $ = cheerio.load(dataSourse);
    const res = $('.productChannels .productChannel').eq(0).each((index,value)=>{
        console.log($(value).find('h3').attr('title'));
    });
}
const app = https.request(options,(res)=>{
    let result = ''
    res.on('data',(chunk)=>{
        result+=chunk;
    })  
    res.on('end',(chunk)=>{
        filterData(result);
        
    })  
})
app.end();