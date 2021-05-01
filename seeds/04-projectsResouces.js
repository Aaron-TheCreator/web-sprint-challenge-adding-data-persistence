
exports.seed = function(knex) {
  return knex('project_resources').insert([
    {
      project_id: 1,
      resource_id: 1,
      task_id: 1
    },
    {
      project_id: 1,
      resource_id: 2,
      task_id: 1 
    },
    {
      project_id: 1,
      resource_id: 3 ,
      task_id: 1
    },
    {
      project_id: 1,
      resource_id: 4 ,
      task_id: 1
    },
    {
      project_id: 1,
      resource_id: 1 ,
      task_id: 2
    },
    {
      project_id: 1,
      resource_id: 2 ,
      task_id: 2
    },
    {
      project_id: 1,
      resource_id: 4 ,
      task_id: 2
    },
    {
      project_id: 1,
      resource_id: 4 ,
      task_id: 2
    },
    {
      project_id: 1,
      resource_id: 5 ,
      task_id: 2
    },
    {
      project_id: 1,
      resource_id: 1 ,
      task_id: 3
    },
    {
      project_id: 1,
      resource_id: 2 ,
      task_id: 3
    },
    {
      project_id: 1,
      resource_id: 3 ,
      task_id: 3
    },
    {
      project_id: 1,
      resource_id: 1 ,
      task_id: 4
    },
    {
      project_id: 1,
      resource_id: 2 ,
      task_id: 4
    },
    {
      project_id: 1,
      resource_id: 3 ,
      task_id: 4
    },
    {
      project_id: 1,
      resource_id: 5 ,
      task_id: 4
    },
    {
      project_id: 1,
      resource_id: 1 ,
      task_id: 5
    },
    {
      project_id: 1,
      resource_id: 2 ,
      task_id: 5
    },
    {
      project_id: 1,
      resource_id: 3 ,
      task_id: 5
    },
    {
      project_id: 1,
      resource_id: 4 ,
      task_id: 5
    },
    {
      project_id: 1,
      resource_id: 5 ,
      task_id: 5
    }
  ]);
};
