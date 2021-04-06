const db = require('../../data/dbConfig.js');

// middleware fuction
const mutIntToBool = (num) => {
    if (num == 0) {
        return false;
    } else {
        return true;
    }
};

async function getAllResources() {
    const resources = await db('resources');

    return resources;
} 

async function createResource(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return db('resources as r').where('r.resource_id', resource_id).first();
}

async function getProjectsByResource(id) {
    const projects = await db.select('p.*').distinct().from('projects as p')
        .leftJoin('project_resources as pr', 'p.project_id', 'pr.project_id')
        .join('resources as r', 'pr.resource_id', 'r.resource_id')
        .where('r.resource_id', id);
    
    const mutDta = projects.map( (proj) => {
        proj.project_completed = mutIntToBool(proj.proj_completed);
    });

    return projects;
}

module.exports = {
    getAllResources,
    createResource,
    getProjectsByResource,
}