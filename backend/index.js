const Joi = require('joi');
const express = require('express');
const app = express();
const axios = require('axios');
const cron = require('node-cron');

//Port and initialize

app.use(express.json());  

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

//Github Activity

let githubActivity = [];

//Get Github Data

cron.schedule('* * 2 * *', () => {
    console.log("---------------------");
    console.log("Running Cron Job");
    getGithubData();
});

const getGithubData = () => {
    axios.get('https://api.github.com/users/cmcintyre416/events?json')
      .then(response => {
          let githubData = response.data.splice(0, 6);
          githubActivity = githubData;
          console.log(githubActivity);
      })
      .catch(error => {
        console.log(error);
      });
};


// GET

app.get('/api/githubActivity', (req, res) => {
    res.send(githubActivity);
});

app.get('/api/githubActivity/:id', (req, res) => {
    const githubAction = githubActivity.find(c => c.id === parseInt(req.params.id));
    if (!githubAction) return res.status(404).send('The github data with the given ID was not found.');
    res.send(githubAction);
});

// POST

// app.post('/api/githubActivity', (req, res) => {
   
//     const { error } = validateGitAction(req.body);
//     if (error) return res.status(400).send(result.error.details[0].message);

//     const githubAction = {
//         id: githubActivity.length + 1,
//         name: req.body.name,
//     };
//     githubActivity.push(githubAction);
//     res.send(githubAction);
// });

// PUT

// app.put('/api/githubActivity/:id', (req, res) => {
//     const githubAction = githubActivity.find(c => c.id === parseInt(req.params.id));
//     if (!githubAction) res.status(404).send('The github data with the given ID was not found.');

//     const { error } = validateGitAction(req.body);
//     if(error) return res.status(400).send(result.error.details[0].message);

//     githubAction.name = req.body.name;
//     res.send(githubAction);
// });

// Delete

// app.delete('/api/githubActivity/:id', (req, res) => {
//     const githubAction = githubActivity.find(c => c.id === parseInt(req.params.id));
//     if (!githubAction) return res.status(404).send('The github data with the given ID was not found.');

//     const index = githubActivity.indexOf(githubAction);
//     githubActivity.splice(index, 1);

//     res.send(githubAction);
// });

//Functions

// function validateGitAction(course){
    
//     const schema = {
//         name: Joi.string().min(3).required()
//     };

//     return Joi.validate(course, schema);
// }
