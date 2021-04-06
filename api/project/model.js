const db = require('../../data/dbConfig.js');

async function getAllProjects() {
    const projects = await db('projects');
    console.log(projects);
    const mutIntToBool = (num) => {
        if (num == 0) {
            return false;
        } else {
            return true;
        }
    };
    const mutDta = projects.map( (proj) => {
        proj.project_completed = mutIntToBool(proj.project_completed);
    });
    // console.log(mutDta);
    // console.log(projects);
    return projects;

}

module.exports = {
    getAllProjects,
};


