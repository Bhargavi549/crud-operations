const knex = require('knex')(require('../knexfile').development);

class User {
  static fetchAll() {
    return knex('users').select('*');
  }

  static findById(id) {
    return knex('users').where({ id }).first();
  }

  static create(name, email) {
    return knex('users').insert({ name, email });
  }

  static update(id, name, email) {
    return knex('users').where({ id }).update({ name, email });
  }

  static delete(id) {
    return knex('users').where({ id }).del();
  }
}

module.exports = User;
