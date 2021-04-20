const express = require('express');
const inquirer = require('inquirer');
const routes = require('./routes');
const sequelize = require('./connection');

// creates object that allows you to call express methods
const app = express();

// lets you use port set in env variables or default to 3001
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Lets you use routes
app.use(routes);



/** turn on connection to db and server. ************************************************/
sequelize.sync({ force: true }).then(() => {

    //makes it listen on port and lets you know it started successfully
    app.listen(PORT, () => console.log('Now listening'));

});


let prompt = inquirer.createPromptModule();

prompt('Do you want to add an employee?').then(answer => {
    if (!answer) {
        // return 'Good Day to you';
    }


}).catch(error => {
    if (error.isTtyError) {
        // Prompt issues
        return err;
    } else {
        // Something else went wrong
        return err;
    }
});

