
exports.seed = function(knex) {
  
  return knex('tasks').insert([
    {
      task_description: 'Show up to All Lectures, follow along and ask any questions that arise',
      task_notes: 'important ! listening to someone explain code is better than reading docs online',
      project_id: 1
    },
    {
      task_description: 'complete all "check for understanding" quizzes and projects',
      task_notes: 'this cements useful understanding of concepts outlined in lecture',
      project_id: 1
    },
    {
      task_description: 'complete all sprint challenges and corresponding assessments',
      task_notes: 'each sprint wraps up the modules outlined, this data persistent sprint id Unit 4, Sprint 2, for example',
      project_id: 1
    },
    {
      task_description: 'pass Web CORE Technical Interview',
      task_notes: 'this interview is pass or fail, and will be judged by 11? main topics ranging from Unit1 - Unit 4 material',
      project_id: 1
    },
    {
      task_description: 'build web database and web API for Buildweek Project',
      task_notes: 'work with other track team members from varying Units of Full-Stack cohort to build a project. I will be responsible for the backend as a part of the Unit 4 rubric',
      project_id: 1
    }
  ]);
};
