const ical = require('ical-generator');

function generateCalendar(eventList) {
    const cal = ical({
        domain: 'github.com',
        name: 'Online Event-registration Feed'
    });

    for (const event of eventList) {
        console.log(event);
        
        cal.createEvent({
            ...event,
            description: event.url + "\n\n" +event.description
        });
    }

    return cal;
}

module.exports = {
    generateCalendar
};

