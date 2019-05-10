let params = qs.parse(URL.query);
var data  = fs.readFileSync('./users.json');
let users = JSON.parse(data);
let res = users.find(users=>{
    return users.username == params.username && user.password == params.password;
})