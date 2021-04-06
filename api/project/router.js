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

module.exports = router;
