let http =require("http");
let server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>welcome to server1</h1>");
    res.end();
});
server.listen(8080,()=>{
    console.log("server1 running at port 8080")
});