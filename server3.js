let http =require("http");
let server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>welcome to server3</h1>");
    res.end();
});
server.listen(8084,()=>{
    console.log("server3 running at port 8084")
});
