const http = require('http');

http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type': 'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    // const persona = {
    //     id: 'ADF12',
    //     nombre: 'Hazael'
    // }

    res.write('id, nombre\n');
    res.write('1, Hazael\n');
    res.write('2, Adriana\n');
    res.write('3, Dany\n');
    res.end();
})
.listen(8080);

console.log("Escuchando el puerto", 8080);