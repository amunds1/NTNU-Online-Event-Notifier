const express = require('express')
const { generateEventList } = require('./api');
const { generateCalendar } = require('./calendar');

const app = express()
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const eventList = await generateEventList();
    const calendar = generateCalendar(eventList);
    res.end(calendar.toString());
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

