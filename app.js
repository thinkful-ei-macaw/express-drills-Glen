const express = require('express');

const app = express();


const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Root Page');
});

app.get('/sum', (req, res) => {


    // http://localhost:8000/sum?a=2&b=2
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = a + b;

    if (!a || !b) {
        return res.status(400).send('Provide a number')
    }

    const answer = `The sum of ${a} and ${b} is ${c} `

    res.send(answer);
})

app.get('/greetings', (req, res) => {
    const name = req.query.name;
    const race = req.query.race;

    if (!name) {
        return res.status(400).send('Please provide name');
    }

    if (!race) {
        return res.status(400).send('Plese provide race');
    }

    const greetings = `Hey ${name} the ${race}, Welcome to our Kingdom`;

    res.send(greetings);
})

app.get('/echo', (req, res) => {
    const responseText = `Details of your request:
    BASE URL: ${req.baseUrl}
    IP: ${req.ip}
    Path: ${req.path}`;
    res.send(responseText)
});

app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end();
})


app.listen(8000, () => {
    console.log('Express server is listening on port 8000!')
});
