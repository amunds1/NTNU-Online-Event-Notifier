# NTNU-Online-Webcal

This is repository will create a calendar in ICal format which includes all future events for Online, the computer science student organization at NTNU. This application will filter away ALL events without a registration date specified and all events with a registration date pre-today. You can export the result to ICalendar, Google Calendar or any other calender which supports the ICal format. The usage of this calendar will most likely be for a bot which will send a notification x minutes before event registration start.

# How to contribute

1. fork this repository
2. run `git clone https://github.com/<Your Github User here>/NTNU-Online-Event-Notifier/`
3. run `yarn install` to install dependencies
4. create a new branch `git checkout -b <Your branch name>`. The branch name can be something like adding <new feature> or fixing <new bug>
5. write some code
6. run `git add <yourpath/NTNU-Online-Event-Notifier/<your changed files>` and then `git commit -m <useful message about what you have done >`
7. run `git push origin <branch name>` and create a pull request here. Remember to describe what you have done etc.

You can run `yarn start` and go to localhost:<portnumber> to check if the output is a ICal format

To add this calendar you can either add from URL for Google Calendar or paste it and follow the instructions for ICalendar
