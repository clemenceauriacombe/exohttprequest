const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    //res.end("My first server!\n");
    console.log(req.method);
    if (req.method == "GET") {
        res.end("C'est la méthode GET!\n");  
    } else if (req.method == "POST") {
        res.end("C'est la méthode POST!\n"); 
    } else if (req.method == "PUT") {
        res.end("C'est la méthode PUT!\n"); 
    } else if (req.method == "DELETE") {
        res.end("C'est la méthode DELETE!\n"); 
    } else {
        res.end("Erreur : méthode non trouvée\n");
    }
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

