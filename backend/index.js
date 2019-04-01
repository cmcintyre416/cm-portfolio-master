const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());  

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

//Github Activity

const githubActivity = [
    { id: 1, name: 'course1'},
];

// GET

app.get('/api/githubActivity', (req, res) => {
    res.send(githubActivity);
});

app.get('/api/githubActivity/:id', (req, res) => {
    const githubAction = githubActivity.find(c => c.id === parseInt(req.params.id));
    if  (!githubAction) res.status(404).send('The github data with the given ID was not found.');
    res.send(githubAction);
});

// POST

app.post('/api/githubActivity', (req, res) => {
   
    const { error } = validateGitAction(req.body);
    if (error) return res.status(400).send(result.error.details[0].message);

    const githubAction = {
        id: githubActivity.length + 1,
        name: req.body.name,
    };
    githubActivity.push(githubAction);
    res.send(githubAction);
});

// PUT

app.put('/api/githubActivity/:id', (req, res) => {
    const githubAction = githubActivity.find(c => c.id === parseInt(req.params.id));
    if (!githubAction) res.status(404).send('The github data with the given ID was not found.');

    const { error } = validateGitAction(req.body);
    if(error) return res.status(400).send(result.error.details[0].message);

    githubAction.name = req.body.name;
    res.send(githubAction);
});

// Delete

app.delete('/api/githubActivity/:id', (req, res) => {
    const githubAction = githubActivity.find(c => c.id === parseInt(req.params.id));
    if (!githubAction) return res.status(404).send('The github data with the given ID was not found.');

    const index = githubActivity.indexOf(githubAction);
    githubActivity.splice(index, 1);

    res.send(githubAction);
});

//Functions

function validateGitAction(course){
    
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}
