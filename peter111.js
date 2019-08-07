const http = require('http');
const data ={
    firstName:'Kavaljeet',
    lastName:'Singh'
}
const site = http.createServer(function(req,res){

    console.log('Hello World');
    console.log(req.headers);
    console.log(req.url);
   res.setHeader('Content-Type','application/json');
   res.write(JSON.stringify(data));
   res.end('<h1>Hello World</h1>');
});

site.listen(3000);