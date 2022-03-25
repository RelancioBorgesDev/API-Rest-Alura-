const http = require('http');

const rota = {
    '/': 'Curso Node',
}
const server = http.createServer((req,res) => {
    res.writeHead('200', {'Content-Type': 'text/plain'});
    res.end(rota[req.url])
    console.log(req.url)
})

server.listen(3000, () => {
    console.log('Working, no BS')
})