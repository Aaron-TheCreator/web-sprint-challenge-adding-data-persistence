const express = require('express');
const Projects = require('./model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getAllProjects()
        .then( projects => {
            res.status(200).json(projects);
        })
        .catch(next)
});

router.get('/:id/resources', (req, res, next) => {
    const { id } = req.params;
    Projects.getProjectResources(id)
        .then( resources => {
            res.status(200).json(resources);
        })
        .catch(next)
});

router.get('/:id/tasks', (req, res, next) => {
    const { id } = req.params;
    Projects.getProjectTasks(id)
        .then( tasks => {
            res.status(200).json(tasks);
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    const proj = req.body;
    Projects.createProject(proj)
        .then( proj => {
            res.status(201).json(proj)
        })
        .catch(next)
});

module.exports = router;
