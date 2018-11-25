const ical = require('ical-generator');

function generateCalendar(eventList) {
    const cal = ical({
        domain: 'github.com',
        name: 'Online Event Feed'
    });

    for (const event of eventList) {
        console.log(event);
        
        cal.createEvent({
            ...event,
            description: event.summary
        });
    }

    return cal;
}

module.exports = {
    generateCalendar
};

