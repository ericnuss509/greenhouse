
import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import Home from "./views/Home.js";
import Rental from "./views/Rental.js";
import Calendar from "./views/Calendar.js";
import Contact from './views/Contact.js';
import Examples from './views/Examples.js';
import Build from './views/Build.js';
import About from './views/About.js';
import FAQs from './views/FAQs.js';
import Bio from './views/Bio';
import React, { Component }  from 'react';



function App() {
  

//   var gapi = window.gapi
//   /* 
//     Update with your own Client Id and Api key 
//   */
//   var CLIENT_ID = ""
//   var API_KEY = ""
//   var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
//   var SCOPES = "https://www.googleapis.com/auth/calendar.events"

//   const handleClick = () => {
//     gapi.load('client:auth2', () => {
//       console.log('loaded client')

//       gapi.client.init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         discoveryDocs: DISCOVERY_DOCS,
//         scope: SCOPES,
//       })

//       gapi.client.load('calendar', 'v3', () => console.log('bam!'))
//       gapi.auth2.getAuthInstance().signIn()
//       .then(() => {
        
//         var event = {
//           'summary': 'Awesome Event!',
//           'location': '800 Howard St., San Francisco, CA 94103',
//           'description': 'Really great refreshments',
//           'start': {
//             'dateTime': '2022-06-28T09:00:00-07:00',
//             'timeZone': 'America/Los_Angeles'
//           },
//           'end': {
//             'dateTime': '2022-06-28T17:00:00-07:00',
//             'timeZone': 'America/Los_Angeles'
//           },
//           'recurrence': [
//             'RRULE:FREQ=DAILY;COUNT=2'
//           ],
//           'attendees': [
//             {'email': 'lpage@example.com'},
//             {'email': 'sbrin@example.com'}
//           ],
//           'reminders': {
//             'useDefault': false,
//             'overrides': [
//               {'method': 'email', 'minutes': 24 * 60},
//               {'method': 'popup', 'minutes': 10}
//             ]
//           }
//         }

//         var request = gapi.client.calendar.events.insert({
//           'calendarId': 'primary',
//           'resource': event,
//         })

//         request.execute(event => {
//           console.log(event)
//           window.open(event.htmlLink)
//         })
        

//         /*
//             Uncomment the following block to get events
//         */
//         /*
//         // get events
//         gapi.client.calendar.events.list({
//           'calendarId': 'primary',
//           'timeMin': (new Date()).toISOString(),
//           'showDeleted': false,
//           'singleEvents': true,
//           'maxResults': 10,
//           'orderBy': 'startTime'
//         }).then(response => {
//           const events = response.result.items
//           console.log('EVENTS: ', events)
//         })
//         */
    

//       })
//     })
//   }


//   return (
//     <div className="App">
//       <header className="App-header">
      
//         <p>Click to add event to Google Calendar</p>
//         <p style={{fontSize: 18}}>Uncomment the get events code to get events</p>
//         <p style={{fontSize: 18}}>Don't forget to add your Client Id and Api key</p>
//         <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button>
//       </header>
//     </div>
//   );
// }

  return (
      <Router>
        <Home path="/"/>
        <Rental path="/rental"/>
        <Calendar path="/calendar"/>
        <Examples path="/examples"/>
        <Build path="build"/>
        <Contact path="/contact"/>
        <About path="/about"/>
        <FAQs path="faqs"/>
        <Bio path="Bio"/>
      </Router>

  );
}

export default App;
