# Interview Scheduler

## Project Description
The interview scheduler is an web application that tracks student interviews built with the latest tools to optimize ones user experience! We utilaize React's bult-in and custom hooks that allows user to add, edit, and delete appointments in real time! Data is stored by the API server using PSQL (PostgreSQL. Using JSON the client application is able to communicate with the API server over HTTP in a JSON format. Quality control is important, so this project follows best practicies of TDD (Test Driven Development), where individual components are tested in isloation and End-To-End testing is preformed!
#
### Project Features
- Appointment days (Monday to Friday) are displayed and colour-coordinated depending on availability
- The days show the number of slots available as a snapshot of the week as well as updates as appointments are scheduled, rescheduled or deleted!
- A user can switch between days and see detailed information
- Booked and available slots are clearly differentiated
- A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers
- A user can change the details of an existing interview by pressing the edit icon
- A user can cancel an existing interview, a message in the appointment will ask to confirm the action before permanently deleting an interview as well as display any errors!
- Days display currently remaining spots and capture updates after each modification
#
## Setup

Install dependencies with `npm install`.

### Running Webpack Development Server

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Cypress Test Framework

```sh
npm run cypress
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```
# Displays Of Our Beautiful Application
## Homepage View
![My Image](docs/daily%20view.png)
## Book an Appointment!

https://user-images.githubusercontent.com/112907944/206574171-d947c66e-dc20-4175-8b66-3a8c6f06fd1c.mp4


## Edit an Appointment!


https://user-images.githubusercontent.com/112907944/206574215-d1a4f454-9acf-41b4-bd02-ab042a58a67b.mp4



## Delete an Appointment!


https://user-images.githubusercontent.com/112907944/206574240-1c709a75-cd09-46da-9c48-5a0c06b692d0.mp4



## API server and Database Setup
### For full functionality both must run concurrently: the client and the API server applications.
- Click [here](https://github.com/lighthouse-labs/scheduler-api) to tart by forking and cloning the scheduler-api server
- Follow the steps outlined in README to install and setup the database
- Fork and clone this repo
- Navigate to the root directory and install dependencies with npm install
- Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project ➜ npm start
#
## Project Stack
### Front-End: React, Axios, JSX, HTML, SASS, JavaScript

### Back-End: Express, Node.js, PostgreSQL

### Testing: Storybook, Webpack Dev Server, Jest, Testing Library and Cypress

#
## Dependencies
- Axios
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts
- Babel/core
- Storybook/addon-actions
- Storybook/addon-backgrounds
- Storybook/addon-links
- Storybook/addons
- Storybook/react
- Testing-library/jest-dom
- Testing-library/react
- Testing-library/react-hooks
- Babel-loader
- Node-sass
- Prop-types
- React-test-renderer
