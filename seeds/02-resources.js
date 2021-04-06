
exports.seed = function(knex) {
  
  return knex('resources').insert([
    {
      resource_name: 'time',
      resource_description: 'a fourth dimension for the three dimensional world to operate within'
    },
    {
      resource_name: 'energy',
      resource_description: 'describes caloric energy created by biological processes and emotional inspiration to act in specific ways'
    },
    {
      resource_name: 'internet connection',
      resource_description: 'connection to a globalized network of digitized information transferred wirelessly to devices by satellite and directly via internet service provider owned coaxial cable infrastructures connected to DNS centers'
    },
    {
      resource_name: 'computer',
      resource_description: 'central processing unit with hard drive and random access memory, preffered OS: mac OSx'
    },
    {
      resource_name: 'knowledge',
      resource_description: 'relevant knowledge,relating to relational database management systems in particular, and their usage in sqlite3 and other database types'
    }
  ])
};
