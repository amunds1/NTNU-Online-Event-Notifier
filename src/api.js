const request = require('request');
const moment = require('moment');

function getRawEventList(url) {
  return new Promise((resolve, reject) => {
    request(url, { json: true }, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

async function generateEventList() {
  const date = moment().format('YYYY-MM-DD');
  const baseUrl = `https://online.ntnu.no/api/v1/events/?attendance_event__isnull=False `;
  let url = baseUrl;
  const eventList = [];

  while (url != null) {

    const body = await getRawEventList(url);
    url = body.next;

    let filteredResults = body.results.filter(result => (date <= result.attendance_event.registration_start))
    
     eventList.push(...filteredResults.map(result => ({
      title: result.title,
      start: result.attendance_event.registration_start,
      end: result.attendance_event.registration_start,
      summary: result.ingress_short,
      description: result.ingress_short,
      location: result.location,
      url: 'https://online.ntnu.no' + result.absolute_url,
      uid: result.id
    })));
  }

  return eventList;
};

module.exports = {
  generateEventList
};
