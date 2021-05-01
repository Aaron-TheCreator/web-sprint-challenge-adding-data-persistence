
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      project_name: 'Finish Unit 4',
      project_description: 'Complete all requirements of Lambda School Full-Stack Web Development Cohort'
    }
  ])
};
